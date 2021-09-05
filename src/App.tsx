import Nav from "./components/Nav/Nav";
import ProductList from "./components/ProductList/ProductList";
import Banner from "./components/Banner/Banner";

import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Nav />
      <div className="body-wrapper">
        <Banner />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
