import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Nav />
      <Search
        setIsLoading={setIsLoading}
        foodData={foodData}
        setFoodData={setFoodData}
      />
      {isLoading ? (
        <h2>..Loading</h2>
      ) : (
        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} setFoodId={setFoodId} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails
              foodId={foodId}
              setFoodId={setFoodId}
              foodData={foodData}
            />
          </InnerContainer>
        </Container>
      )}
    </div>
  );
}
