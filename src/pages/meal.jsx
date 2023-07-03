import React from "react";  
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom'
import MealItem from "../components/main/mealItem";


const Recipe = () => {

    const [meal, setMeal] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()


    const mealDBAPI = "https://www.themealdb.com/api/json/v1/1/";
  
    const getRecipe = async(name) => {
        const response = await fetch(`${mealDBAPI}lookup.php?i=${searchParams.get('i')}`);
        const data = await response.json();
        setMeal(data.meals);


    }


    //const getMealsByCategory = () => {
      //  alert();
        //const response = await fetch(`${mealDBAPI}filter.php`);
        //const data = await response.json();
        //setCategories(data.categories);
    
        //console.log(meal);
     // };


    useEffect(() => {
        getRecipe();
      }, []);


    return(
        <>

        <div className="mt-5">
        <div className="container">

        {meal && meal.length > 0 ? (
            meal.map(item => (<MealItem meal={item} />))
            ) : (
                <div className="row">
                    <p className="text-center">Meal not found</p> 
                </div>)

        }
        </div>
        </div>

        </>

    )
}


export default Recipe;