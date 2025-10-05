import { useState } from 'react';
import ProductList from './components/ProductList';
import StaticProductList from './components/StaticProductList';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Lists */}
      <h1>Lists and Keys</h1>
      <h2>Static List</h2>
      <StaticProductList />
      
      <h2>Dynamic List</h2>
      <ProductList />
    </>
  );
}

export default App
