import FoodItme from "./FoodItem";

export default function FoodList({ foodData, setFoodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => {
        return (
          <FoodItme
            setFoodId={setFoodId}
            foodData={foodData}
            key={food.id}
            food={food}
          />
        );
      })}
    </div>
  );
}
