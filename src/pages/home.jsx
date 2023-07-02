import React from "react";  
import { useState, useEffect } from "react";
import MealItem from "../components/main/mealItem";

const Home = () => {

    const [meals, setMeals] = useState([]);

    const mealDBAPI = "https://www.themealdb.com/api/json/v1/1/";
  
  
    const getRandomMeal = async() => {
      const response = await fetch(`${mealDBAPI}random.php`);
      const data = await response.json();
      setMeals(data.meals);
  
      //console.log(meal);
    }


  
  
    useEffect(() => {
      console.log("I should only fire once");
      getRandomMeal();
    }, []);
  

    return(
        <div className="home">
                 <div className="main-content mt-4">

      {meals.length > 0 &&                 
      <div className="container">
        <div className="row">
          <div classname="col-12">
            <p>Here's a random recipe to ponder:</p>
          </div>
        </div>
        <div className="random-meal">
            {meals.map(meal => (<MealItem meal={meal} />))};
        </div>



        </div> 
      } 
    </div>
        </div>
    )
}


export default Home;