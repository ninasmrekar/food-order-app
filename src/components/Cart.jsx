import { useContext } from "react";
import Modal from "./Modal";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

function Cart({ isDialogOpen, onCheckout, onClose }) {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleDecrease(id) {
    cartCtx.removeItem(id);
  }

  function handleIncrease(item) {
    cartCtx.addItem(item);
  }

  return (
    <Modal className="cart" open={isDialogOpen}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <button className="button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onCheckout}>
          Go to Checkout
        </button>
      </p>
    </Modal>
  );
}

export default Cart;
