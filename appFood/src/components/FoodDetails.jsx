import styles from "../styles/FoodDetails.module.css";
import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import ServingDetails from "./ServingDetails";
import DetailsHeader from "./DetailsHeader";

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
  console.log(food);
  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <div className={styles.foodDetailsContainer}>
          <div>
            <DetailsHeader food={food} />
          </div>
          <div className={styles.someDetailsContiner}>
            <ServingDetails food={food} />
          </div>
          <div>
            <Ingredients food={food} />
          </div>
          <div style={{ "margin-top": "30px" }}>
            <Instructions food={food} />
          </div>
        </div>
      )}
    </>
  );
}
