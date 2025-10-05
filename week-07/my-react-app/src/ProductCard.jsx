export default function ProductCard({ title, price, image, isOnSale }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>
                {isOnSale && <span className="sale">Sale! </span>}${price}
            </p>
        </div>
    )
}