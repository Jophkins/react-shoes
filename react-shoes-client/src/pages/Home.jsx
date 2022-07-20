import React from 'react';
import Card from "../components/Card";

const Home = ({items, searchValue, onAddToFavorite, onAddToCart, onChangeSearchInput}) => {

  const sneakersArrReady = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => {
    return <Card key={index}
                 onFavorite={(item) => onAddToFavorite(item)}
                 onPlus={onAddToCart}
                 {...item}
    />
  });
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
        {sneakersArrReady}
      </div>

    </div>
  );
};

export default Home;
