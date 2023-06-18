import { useState, useEffect } from 'react';
import MealCard from './components/mealCard';
import Header from './components/header';


import './App.css';


const App = () => {

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


  return (
    <div>

    <Header/>

    {meals.length > 0 &&                 
    <div className="container">
       {meals.map((meal) => (<MealCard meal={meal} />))};


      </div> 
    } 
    </div>


  );
}

export default App;
