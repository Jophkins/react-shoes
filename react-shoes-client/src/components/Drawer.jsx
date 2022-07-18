import React from 'react';

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <div className="cartTitle">
          <h2>Your Cart</h2>
          <img className="removeBtn" width={25}
               src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
        </div>

        <div className="items">
          <div className="cartItem">
            <img width={70}
                 src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwa3fd51db/images/a_08/A02080C_A_08X1.jpg?sw=406"
                 alt=""/>
            <div className="cartItemContent">
              <p>Patchwork details and paisley prints bring standout style to the premium Chuck 70.</p>
              <b>59 usd.</b>
            </div>
            <img className="removeBtn" width={25}
                 src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
          </div>
          <div className="cartItem">
            <img width={70}
                 src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwa3fd51db/images/a_08/A02080C_A_08X1.jpg?sw=406"
                 alt=""/>
            <div className="cartItemContent">
              <p>Patchwork details and paisley prints bring standout style to the premium Chuck 70.</p>
              <b>59 usd.</b>
            </div>
            <img className="removeBtn" width={25}
                 src="https://i.pinimg.com/736x/8e/c0/18/8ec018b55a09b02667588e4fd916129f.jpg" alt=""/>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div/>
              <b>118 usd.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div/>
              <b>12 usd.</b>
            </li>
          </ul>
          <button>Submit your order</button>
        </div>

      </div>
    </div>
  );
};

export default Drawer;
