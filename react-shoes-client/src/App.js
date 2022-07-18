function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2>Your Cart</h2>

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
                <div></div>
                <b>118 usd.</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>12 usd.</b>
              </li>
            </ul>
            <button>Submit your order</button>
          </div>

        </div>
      </div>

      <header>
        <div className="headerLeftSide">
          <img width={80} height={60} src="https://i.ytimg.com/vi/l56I3fa7fts/hqdefault.jpg" alt="logo"/>
          <div className="headerInfo">
            <h3>ALL-STARS SNEAKERS</h3>
            <p>Convers Life</p>
          </div>
        </div>
        <ul className="headerRightSide">
          <li>
            <img width={40} height={40}
                 src="https://s3-us-west-1.amazonaws.com/sweeper-production-merchantimage/dp_5d3ef58f83889769800f158b.jpg"
                 alt=""/>
            <span>1250 uah.</span>
          </li>
          <li>
            <img src="http://www.cherkasyoblenergo.com/uploads/posts/2018-02/1519657152_img_508630.png" alt="profile"/>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="contentTitle">
          <h1>All sneakers</h1>
          <div className="searchBlock">
            <span>0o</span>
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="sneakers">
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

          <div className="card">
            <img width={240} height={240}
                 src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw050f9002/images/f_08/172688C_F_08X1.jpg?sw=406"
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

          <div className="card">
            <img width={240} height={240}
                 src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw3ca3b5b7/images/f_08/172687C_F_08X1.jpg?sw=406"
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
        </div>

      </div>

    </div>
  );
}

export default App;
