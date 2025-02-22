import styles from "../styles/FoodItem.module.css";

export default function FoodItme({ food, foodData, setFoodId }) {
  const handleClick = () => {
    setFoodId(food.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
