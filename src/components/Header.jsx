import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

function Header({ onOpen }) {
  const cartCtx = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button" onClick={onOpen}>
        Cart ({cartCtx.items ? cartCtx.items.length : 0})
      </button>
    </header>
  );
}

export default Header;
