export default function ServingDetails({ food }) {
  return (
    <>
      <span>
        ⏰<strong>{food.readyInMinutes} Minutes</strong>
      </span>

      <span>
        👪<strong>Serves: {food.servings}</strong>
      </span>

      <span>${Math.round(food.pricePerServing / 100)} Per Serving</span>

      <span>{food.vegetarian ? "🥦Vegetarian" : "🥩Non-Vegetarian"}</span>

      <span>{food.vegan ? "🐄Vegan" : "🔴Non-Vegan"}</span>
    </>
  );
}
