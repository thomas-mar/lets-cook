import React from "react";  
import { useState, useEffect } from "react";
import Categories from "../components/main/categories";
const Recipes = () => {

    const [categories, setCategories] = useState([]);

    const mealDBAPI = "https://www.themealdb.com/api/json/v1/1/";
  
    const handleClick = () => {
        alert("Hello");
    }

    const getCategories = async() => {
      const response = await fetch(`${mealDBAPI}categories.php`);
      const data = await response.json();
      setCategories(data.categories);
  
      //console.log(meal);
    }

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
                <div class="row justify-content-center">
                    {categories.map((categories) => (<Categories category={categories} />))};

                </div>
            </div>
        </div>

        <div className="recipes">
            Here's some recipes
        </div>

        <button onClick={handleClick}>Click Me</button>
        </>

    )
}


export default Recipes;