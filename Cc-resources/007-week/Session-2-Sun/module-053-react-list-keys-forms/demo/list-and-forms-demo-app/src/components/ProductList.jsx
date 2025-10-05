export default function ProductList() {
    // array of products - typically this would be stored in state and updated
  const products = ["iPhone", "iPad", "MacBook", "Apple Watch", "Android Phone"];

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}