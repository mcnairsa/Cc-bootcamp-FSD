import "./App.css";
import StaticProductList from "./components/StaticProductList";
import ProductList from "./components/ProductList";
import PizzaMenu from "./components/PizzaMenu";
import PizzaMenuUseState from "./components/PizzaMenuUseState";

function App() {
  return (
    <>
      {/* Lists */}
      <h1>Lists and Keys</h1>

      <h2>Static List</h2>
      <StaticProductList />

      <h2> Dynamic list using map and key</h2>
      <ProductList />

      <h2> Dynamic list of object using Key incorrectly and no useState</h2>
      <PizzaMenu />

      <h2>Dynamic list of objects using key with useState</h2>

      <PizzaMenuUseState />
    </>
  );
}

export default App;
