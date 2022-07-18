import React from 'react';

import styles from './Card.module.scss';

const Card = ({name, price, imgUrl}) => {

  const clickHandler = () => {
    return console.log(name)
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
          <button onClick={clickHandler}>
            +
          </button>
        </div>
      </div>
  );
};

export default Card;
