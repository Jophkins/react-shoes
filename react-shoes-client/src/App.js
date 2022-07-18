import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {

  const sneakersArr = [
    {
      name: 'Chuck 70 Sherpa',
      price: '64.99 usd.',
      imgUrl: 'https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw736183f1/images/h_08/172005C_H_08X1.jpg?sw=406'
    },
    {
      name: 'Chuck 70',
      price: '60 usd.',
      imgUrl: 'https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw8f80969d/images/j_08/164949C_J_08X1.jpg?sw=406'
    },
    {
      name: 'Chuck 70 Tropical Leaf',
      price: '49.99 usd.',
      imgUrl: 'https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw29e7376e/images/l_08/A00482C_L_08X1.jpg?sw=406'
    }
  ]

  const sneakersArrReady = sneakersArr.map((item) => {
    return <Card name={item.name} price={item.price} imgUrl={item.imgUrl} />
  })

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentTitle">
          <h1>All shoes</h1>
          <div className="searchBlock">
            <span>0o</span>
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="sneakers">
          {sneakersArrReady}
        </div>

      </div>

    </div>
  );
}

export default App;
