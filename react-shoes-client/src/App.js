import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {

      setIsLoading(true);

      const cartResponse = await axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://62d66e3751e6e8f06f096028.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62d66e3751e6e8f06f096028.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62d66e3751e6e8f06f096028.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const {data} = await axios.post('https://62d66e3751e6e8f06f096028.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (e) {
      alert('Ошибка добавления в избранное');
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id));
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems
      }}>
        <div className="wrapper clear">
          {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
          <Header onClickCart={() => setCartOpened(true)}/>

          <Routes>
            <Route path="/" exact element={
              <Home items={items}
                    cartItems={cartItems}
                    searchValue={searchValue}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    onChangeSearchInput={onChangeSearchInput}
                    setSearchValue={setSearchValue}
                    isLoading={isLoading}
              />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/orders" element={<Orders />} />
          </Routes>

        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
