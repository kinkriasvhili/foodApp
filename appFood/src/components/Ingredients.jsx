import styles from "../styles/FoodDetails.module.css";

export default function Ingredients({ food, isLoading }) {
  return (
    <>
      <div className={styles.ingredientsContainer}>
        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        {food.extendedIngredients.map((item) => {
          return (
            <ul className={styles.ingredientsLine}>
              <h3>{item.name}</h3>
              <h4>
                {item.amount} {item.unit}
              </h4>
              <img
                src={
                  `https:spoonacular.com/cdn/ingredients_100x100/` + item.image
                }
                alt=""
              />
            </ul>
          );
        })}
      </div>
    </>
  );
}
/**
 *
 **/
