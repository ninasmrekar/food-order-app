import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddToCart(meal) {
    cartCtx.addItem(meal);
  }

  return (
    <div className="meal-item">
      <img src={"http://localhost:3000/" + meal.image} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
      <p className="meal-item-description">{meal.description}</p>
      <button
        className="button meal-item-actions"
        onClick={() => handleAddToCart(meal)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MealItem;
