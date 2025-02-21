import styles from "../styles/FoodItem.module.css";

export default function FoodItme({ food, foodData, setFoodId }) {
  const handleClick = () => {
    setFoodId(food.id);
  };
  return (
    <div className={styles.itemContainer}>
      <h2 className={styles.itemTitle}>{food.title}</h2>
      <img className={styles.itemImage} src={food.image} alt="" />
      <button
        onClick={() => {
          handleClick();
        }}
        className={styles.itemButton}
      >
        View Recipe
      </button>
    </div>
  );
}
