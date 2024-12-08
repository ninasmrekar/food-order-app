import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./Input";
import { useContext } from "react";
import CartContext from "../store/CartContext";

function Checkout({ isDialogOpen, onClose }) {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleSubmit() {}

  return (
    <Modal className="cart" open={isDialogOpen}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <button type="button" className="button" onClick={onClose}>
            Close
          </button>
          <button className="button" onClick={handleSubmit}>
            Submit Order
          </button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
