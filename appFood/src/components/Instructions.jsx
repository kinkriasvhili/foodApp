import styles from "../styles/FoodDetails.module.css";

export default function Instructions({ food }) {
  return (
    <>
      <div className={styles.instructionContainer}>
        <h2 className={styles.instructionTitle}>Instructions</h2>
        {food.analyzedInstructions[0].steps.map((step) => {
          return (
            <li className={styles.instructionLine} key={step.number}>
              {step.step}
            </li>
          );
        })}
      </div>
    </>
  );
}
