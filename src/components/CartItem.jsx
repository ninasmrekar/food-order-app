import { currencyFormatter } from "../util/formatting";

function CartItem({ item, onDecrease, onIncrease }) {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item)}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
