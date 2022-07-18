import React from 'react';

const Card = () => {
  return (
      <div className="card">
        <div className="favorite">
          <img width={32} src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png" alt="unliked"/>
        </div>
        <img width={240} height={240}
             src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwa3fd51db/images/a_08/A02080C_A_08X1.jpg?sw=406"
             alt=""/>
        <h5>Patchwork details and paisley prints bring standout style to the premium Chuck 70.</h5>
        <div className="cardBottom">
          <div className="cardSubBottom">
            <span>Price:</span>
            <b>59 usd.</b>
          </div>
          <button>
            +
          </button>
        </div>
      </div>
  );
};

export default Card;
