import React, {useContext} from 'react';
import AppContext from "../context";

const Info = ({title, desc}) => {
  const {setCartOpened} = useContext(AppContext);

  return (
    <div className="cartEmpty">
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <button onClick={() => setCartOpened(false)}>Get back</button>
    </div>
  );
};

export default Info;
