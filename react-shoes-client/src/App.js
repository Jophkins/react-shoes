import Card from "./components/Card";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import {useEffect, useState} from "react";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (item) => {
    axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/cart', item);
    setCartItems(prev => [...prev, item]);
  }

  const sneakersArrReady = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => {
    return <Card key={index} name={item.name} price={item.price} imgUrl={item.imgUrl} onPlus={onAddToCart} />
  });

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentTitle">
          <h1>{searchValue ? `Searching "${searchValue}"` : 'All shoes'}</h1>
          <div className="searchBlock">
            <span>0o</span>
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="sneakers">
          {sneakersArrReady}
        </div>

      </div>

    </div>
  );
}

export default App;
