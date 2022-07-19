import React, {useState} from 'react';

import styles from './Card.module.scss';

const Card = ({name, price, imgUrl, onPlus}) => {

  const [isAdded, setIsAdded] = useState(false);

  const addHandler = () => {
    setIsAdded(!isAdded);
    onPlus({name, price, imgUrl});
  }

  return (
      <div className={styles.card}>
        <div className="favorite">
          <img width={32} src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="unliked"/>
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
