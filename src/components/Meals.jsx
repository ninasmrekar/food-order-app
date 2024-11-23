import { useState, useEffect } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://food-order-app-z7sl.onrender.com/meals"
      );
      const data = await response.json();
      data.map((meal) => {
        const updatedMeal = meal;
        updatedMeal.quantity = 0;
        return updatedMeal;
      });
      console.log(data);
      setMeals(data);
    }

    fetchMeals();
  }, []);

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default Meals;
