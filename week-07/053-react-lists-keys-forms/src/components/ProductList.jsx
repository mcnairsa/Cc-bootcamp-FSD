export default function ProductList() {
    const products = ["iPhone", "iPad", "MacBook", "Apple Watch", "Android phone"];
    return (
        <ul>
            {products.map((product, index) => (
            <li key={index}>{product}</li>
            ))}
        </ul>
    );
}