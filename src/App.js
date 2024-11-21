// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import FoodCard from "./componets/FoodCard";

function App() {
  let [produts, setproducts] = useState([]);
  const [userData, setUserData] = useState("")
  const [mealType, setMealType] = useState("dinner")

  function fetchData() {

    fetch(`https://api.edamam.com/search?q=${userData}&app_id=2e2b9d3b&app_key=8f576278772e57700fa92426017f0e69&from=0&to=20&calories=591-722&health=alcohol-free&mealType=${mealType}`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data?.hits);
      });
  }

  

  useEffect(() => {
    fetchData();
  }, [userData,mealType])


  return (
    <div>
      <input placeholder="search food here......" onChange={(e) => setUserData(e.target.value)} />

      <select onChange={(e)=>setMealType(e.target.value)}>
        <option  value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="{breakfast">breakfast</option>
      </select>

      <div className="App flex justify-content-around flex-wrap">


        {produts.map((item,i) => {
          return (

            <FoodCard items={item} key={i}></FoodCard>

          );
        })}
      </div>
    </div>
  );
}

export default App;
