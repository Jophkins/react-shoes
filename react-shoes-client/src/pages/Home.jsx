import React from 'react';
import Card from "../components/Card";

const Home = ({
                items,
                searchValue,
                onAddToFavorite,
                onAddToCart,
                onChangeSearchInput,
                cartItems,
                isLoading
}) => {

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
       <Card key={index}
                   onFavorite={(obj) => onAddToFavorite(obj)}
                   onPlus={(obj) => onAddToCart(obj)}
                   added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                   loading={isLoading}
                   {...item}
      />
    ))
  }

  return (
    <div className="content">
      <div className="contentTitle">
        <h1>{searchValue ? `Searching "${searchValue}"` : 'All shoes'}</h1>
        <div className="searchBlock">
          <span>0o</span>
          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="sneakers">
        {renderItems()}
      </div>

    </div>
  );
};

export default Home;
