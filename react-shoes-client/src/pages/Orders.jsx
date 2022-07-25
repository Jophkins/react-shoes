import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

const Orders = () => {

  const {onAddToFavorite, onAddToCart} = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (e) {
        console.log('Error while getting orders', e);
      }
    })();
  }, [])

  const ordersArrReady = (isLoading ? [...Array(8)] : orders).map((item, index) => {
    return <Card key={index}
                 loading={isLoading}
                 {...item}
    />
  });

  return (
    <div className="content">
      <div className="contentTitle">
        <h1>My orders</h1>
      </div>

      <div className="sneakers">
        {ordersArrReady}
      </div>
    </div>
  );
};

export default Orders;
