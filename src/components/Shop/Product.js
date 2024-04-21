export default function Product(props) {
  return (
    <div className="shop-item">
      <span className="shop-item-title">{props.title}</span>
      <img className="shop-item-image" src={props.img} alt="productImg" />
      <div className="shop-item-details">
        <span className="shop-item-price">${props.price}</span>
        <button
          onClick={() => props.addToCartHandler(props.id)}
          className="btn btn-primary shop-item-button"
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
