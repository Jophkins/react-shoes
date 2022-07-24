import React, {useContext, useState} from 'react';
import ContentLoader from "react-content-loader";

import styles from './Card.module.scss';
import AppContext from "../../context";

const Card = ({
                id,
                name,
                price,
                imgUrl,
                onPlus,
                onFavorite,
                favorited = false,
                added = false,
                loading = false
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const addHandler = () => {
    onPlus({id, name, price, imgUrl});
  }

  const favoriteHandler = () => {
    onFavorite({id, name, price, imgUrl});
    setIsFavorite(!isFavorite);
  }

  return (
      <div className={styles.card}>
        {
          loading ?  <ContentLoader
            speed={2}
            width={280}
            height={341}
            viewBox="0 0 280 341"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="20" ry="20" width="258" height="319" />
          </ContentLoader> : <>
            <div className={styles.favorite}>
              <img onClick={favoriteHandler} width={32} src={isFavorite ? "https://www.iconpacks.net/icons/1/free-heart-icon-431-thumb.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/2048px-Ei-heart.svg.png"} alt="unliked"/>
            </div>
            <img width={240} height={240}
                 src={imgUrl}
                 alt=""/>
            <h5>{name}</h5>
            <div className={styles.cardBottom}>
              <div className={styles.cardSubBottom}>
                <span>Price:</span>
                <b>{price}</b>
              </div>
              <img onClick={addHandler} width={32} src={isItemAdded(id) ? "https://cdn.icon-icons.com/icons2/1077/PNG/512/checked1_77964.png" : "https://cdn.icon-icons.com/icons2/1856/PNG/512/radio-button-unchecked_116724.png"} alt="checked"/>
            </div>
          </>
        }
      </div>
  );
};

export default Card;
