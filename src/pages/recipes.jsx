import React from "react";  
import { useState, useEffect } from "react";
import Categories from "../components/main/categories";
import MealCard from "../components/main/mealCard";

const Recipes = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [meals, setMeals] = useState([]);



    const mealDBAPI = "https://www.themealdb.com/api/json/v1/1/";
  
    const getMealsByCategory = async(name) => {
        setSelectedCategory(name);
        const response = await fetch(`${mealDBAPI}filter.php?c=${name}`);
        const data = await response.json();
        setMeals(data.meals);


    }

    const getCategories = async() => {
      const response = await fetch(`${mealDBAPI}categories.php`);
      const data = await response.json();
      setCategories(data.categories);
  
      //console.log(meal);
    }

    //const getMealsByCategory = () => {
      //  alert();
        //const response = await fetch(`${mealDBAPI}filter.php`);
        //const data = await response.json();
        //setCategories(data.categories);
    
        //console.log(meal);
     // };


    useEffect(() => {
        getCategories();
      }, []);


    return(
        <>

        <div className="mt-5">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h1 className="text-center mb-4">Select a type of dish</h1>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="categories text-center">
                            {categories.map((categories) => (<Categories category={categories} getMealsByCategory={getMealsByCategory} selectedCategory={selectedCategory} key={categories.idCategory}/>))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {meals.length > 0 && (
        <div className="recipes mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-3">
                        <h3>
                            Here's some {selectedCategory} recipes:
                        </h3>
                    </div>
                </div>
            
                <div className="row justify-content-center">
                        {meals.map((meals) => (<MealCard meal={meals} key={meals.idMeals}/>))};

                    </div>
           
            </div>
     

        </div>
        )}
        </>

    )
}


export default Recipes;