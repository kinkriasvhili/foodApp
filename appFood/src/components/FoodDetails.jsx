import styles from "../styles/FoodDetails.module.css";
import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "411f1df2eecc404f87e08d91316d2a29";

  useEffect(() => {
    async function fetchFood() {
      try {
        if (foodId) {
          const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
          const data = await resp.json();
          console.log(data);
          setFood(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.foodDetailsContainer}>
      <div>
        <h3 className={styles.detailsName}>{food.title}</h3>
        <img className={styles.detailsImage} src={food.image} alt="" />
      </div>
      <div>
        <span>
          ⏰<strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👪<strong>Serves: {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "🥦Vegetarian" : "🥩Non-Vegetarian"}</span>
        <span>{food.vegan ? "🐄 Vegan" : ""}</span>
      </div>
      <div>
        <span>${Math.round(food.pricePerServing / 100)} Per Serving</span>
      </div>
      <div>
        {isLoading ? (
          <p>...Loading</p>
        ) : (
          <div>
            <h2>Instructions</h2>
            {food.analyzedInstructions[0].steps.map((step) => {
              return <li key={step.number}>{step.step}</li>;
            })}
          </div>
        )}
        {console.log(food)}
      </div>
    </div>
  );
}
