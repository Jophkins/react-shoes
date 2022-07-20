import React from 'react';
import Card from "../components/Card";

const Favorites = ({items, onAddToFavorite}) => {

  const favoritesSneakersArrReady = items.map((item, index) => {
    return <Card key={index}
                 favorited={true}
                 onFavorite={onAddToFavorite}
                 {...item}
    />
  });

  return (
    <div className="content">
      <div className="contentTitle">
        <h1>My favorites</h1>
      </div>

      <div className="sneakers">
        {favoritesSneakersArrReady}
      </div>
    </div>
  );
};

export default Favorites;
