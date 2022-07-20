import Card from "./components/Card";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import Favorites from "./pages/Favorites";

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
    axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/favorites').then(res => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (item) => {
    axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/cart', item);
    setCartItems(prev => [...prev, item]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62d66e3751e6e8f06f096028.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://62d66e3751e6e8f06f096028.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (e) {
      alert('Ошибка добавления в избранное');
    }
  }

  const sneakersArrReady = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => {
    return <Card key={index} name={item.name} price={item.price} imgUrl={item.imgUrl}
                 onFavorite={(item) => onAddToFavorite(item)} onPlus={onAddToCart}/>
  });

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <BrowserRouter>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCartOpened(true)}/>

        <Routes>
          <Route path="/" exact element={<Home items={items}
                                               searchValue={searchValue}
                                               onAddToFavorite={onAddToFavorite}
                                               onAddToCart={onAddToCart}
                                               onChangeSearchInput={onChangeSearchInput}
                                               setSearchValue={setSearchValue}
          />}/>
          <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
