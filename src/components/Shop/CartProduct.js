export default function CartProduct(props) {
  return (
    <div className="cart-row">
      <div className="cart-item cart-column">
        <img
          className="cart-item-image"
          src={props.img}
          width="100"
          height="100"
          alt="proctImg"
        />
        <span className="cart-item-title">{props.title}</span>
      </div>
      <span className="cart-price cart-column">${props.price}</span>
      <div className="cart-quantity cart-column">
        <button
          onClick={() => {props.removeFromCartHandler(props.id)}}
          className="btn btn-danger"
          type="button"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}
