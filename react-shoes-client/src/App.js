import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content">
        <div className="contentTitle">
          <h1>All sneakers</h1>
          <div className="searchBlock">
            <span>0o</span>
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="sneakers">
          <Card />
        </div>

      </div>

    </div>
  );
}

export default App;
