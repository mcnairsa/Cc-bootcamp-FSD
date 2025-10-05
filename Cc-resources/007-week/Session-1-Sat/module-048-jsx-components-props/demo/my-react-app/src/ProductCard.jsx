export default function ProductCard({ title, price, image, isOnSale }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">
        {isOnSale && <span className="sale">SALE! </span>}${price}
      </p>
      <div>This is great</div>
    </div>
  );
}

// this is with props using the props in the jsx
// export default function ProductCard(props) {
//   const title = props.title;
//   const image = props.image;
//   const price = props.price;
//  const isOnSale = props.isOnSale;
//   return (
//     <div className="product-card">
//       <img src={props.image} alt={title} />
//       <h3>{props.title}</h3>
//       <p className="price">
//         {props.isOnSale && <span className="sale">SALE! </span>}${props.price}
//       </p>
//     </div>
//   );
// }

// this is with props using the props in the jsx
// export default function ProductCard(props) {
//   return (
//     <div className="product-card">
//       <img src={props.image} alt={title} />
//       <h3>{props.title}</h3>
//       <p className="price">
//         {props.isOnSale && <span className="sale">SALE! </span>}${props.price}
//       </p>
//     </div>
//   );
// }
