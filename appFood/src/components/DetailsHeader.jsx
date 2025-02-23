import styles from "../styles/FoodDetails.module.css";

export default function DetailsHeader({ food }) {
  return (
    <>
      <h3 className={styles.detailsName}>{food.title}</h3>
      <img className={styles.detailsImage} src={food.image} alt="" />
    </>
  );
}
