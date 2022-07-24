import React, {useContext} from 'react';
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = () => {
  const {favorites, onAddToFavorite} = useContext(AppContext);

  const favoritesSneakersArrReady = favorites.map((item, index) => {
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
