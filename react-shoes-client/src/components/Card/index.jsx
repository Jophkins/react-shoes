import React, {useState} from 'react';

import styles from './Card.module.scss';

const Card = ({id, name, price, imgUrl, onPlus, onFavorite, favorited = false}) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const addHandler = () => {
    setIsAdded(!isAdded);
    onPlus({name, price, imgUrl});
  }

  const favoriteHandler = () => {
    onFavorite({id, name, price, imgUrl});
    setIsFavorite(!isFavorite);
  }

  return (
      <div className={styles.card}>
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
            <img onClick={addHandler} width={32} src={isAdded ? "https://cdn.icon-icons.com/icons2/1077/PNG/512/checked1_77964.png" : "https://cdn.icon-icons.com/icons2/1856/PNG/512/radio-button-unchecked_116724.png"} alt="checked"/>
        </div>
      </div>
  );
};

export default Card;
