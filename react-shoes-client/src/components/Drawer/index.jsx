import React, {useContext, useState} from 'react';
import styles from './Drawer.module.scss';
import Info from "../Info";
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({onClose, items = [], onRemove}) => {

  const {cartItems, setCartItems} = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/orders', {
        items: cartItems
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://62d66e3751e6e8f06f096028.mockapi.io/cart' + item.id);
        delay(1000);
      }
    } catch (e) {
      console.log("Cant create order", e);
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="cartTitle">
          <h2>Your Cart</h2>
          <img onClick={onClose} className="removeBtn" width={25}
               src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
        </div>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item) => (
                <div key={item.id} className="cartItem">
                  <img width={70}
                       src={item.imgUrl}
                       alt=""/>
                  <div className="cartItemContent">
                    <p>{item.name}</p>
                    <b>{item.price} usd.</b>
                  </div>
                  <img onClick={() => onRemove(item.id)} className="removeBtn" width={25}
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
              <button disabled={isLoading} onClick={onClickOrder}>Submit your order</button>
            </div>
          </>
        ) : (<Info title={isOrderComplete ? "Offer completed" : "Cart is empty"}
                   desc={isOrderComplete ? `Your order #${orderId} is ready to deploy` : "Add some sneakers"}
        />)}

      </div>
    </div>
  );
};

export default Drawer;
