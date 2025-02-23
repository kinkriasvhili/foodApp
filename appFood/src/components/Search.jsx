import { useEffect, useState } from "react";
import styles from "../styles/Search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f5984cbe79e043c0b24a635f07d98575";

export default function Search({ setFoodData, foodData, setIsLoading }) {
  const [query, setQuery] = useState("pizza");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setIsLoading(false);
        setFoodData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        value={query}
        type="text"
        className={styles.search}
      />
    </div>
  );
}

// https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=411f1df2eecc404f87e08d91316d2a29
