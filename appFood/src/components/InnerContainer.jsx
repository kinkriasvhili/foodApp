import styles from "../styles/InnerContainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
