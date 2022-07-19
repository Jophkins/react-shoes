import React from 'react';
import styles from './Drawer.module.scss';

const Drawer = ({onClose, items = []}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="cartTitle">
          <h2>Your Cart</h2>
          <img onClick={onClose} className="removeBtn" width={25}
               src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
        </div>

        <div className="items">
          {items.map((item) => (
            <div className="cartItem">
              <img width={70}
                   src={item.imgUrl}
                   alt=""/>
              <div className="cartItemContent">
                <p>{item.name}</p>
                <b>{item.price} usd.</b>
              </div>
              <img className="removeBtn" width={25}
                   src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div/>
              <b>118 usd.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div/>
              <b>12 usd.</b>
            </li>
          </ul>
          <button>Submit your order</button>
        </div>

      </div>
    </div>
  );
};

export default Drawer;
