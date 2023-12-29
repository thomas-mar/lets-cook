import React from "react";
import { useState, useEffect } from "react";
import MealCard from "../components/main/mealCard";
import NewsletterSubscribe from "../components/main/newsletterSubscribe";

import Search from "../components/main/search";


const Home = () => {

  const [meals, setMeals] = useState([]);

  const mealDBAPI = "https://www.themealdb.com/api/json/v1/1/";


  const getRandomMeal = async () => {
    const response = await fetch(`${mealDBAPI}random.php`);
    const data = await response.json();
    setMeals(data.meals);

    //console.log(meal);
  }



const getRandomMeals = async () => {
  const randomMeals = [];

  for (let i = 0; i < 4; i++) {
    const response = await fetch(`${mealDBAPI}random.php`);
    const data = await response.json();
    randomMeals.push(data.meals[0]); // Assuming data.meals is an array with one meal object
  }

  setMeals(randomMeals);
}




  useEffect(() => {
    getRandomMeals();
  }, []);


  return (
    <div className="home">
      <div className="main-content mt-4">

        <div class="container">
          <div class="row">
            <div class="col-12">
            <div class="card bg-light banner banner-hero p-5">
              <div class="row align-items-center h-100">
                <div class="col-5">
                  <h1>Instant recipe ideas for you</h1>
                  <a class="btn btn-primary me-3 btn-lg" href="/recipes">Explore Now</a> 
                  <a class="btn btn-primary me-3 btn-lg" href="/">Search Recipes <i class="fi fi-br-search"></i></a>
                </div>
              </div>
            </div>
            </div>



            <div class="row align-items-center p-5">

              <div class="col-6">

                <p>Where culinary exploration meets community connection. Discover a treasure trove of handpicked recipes, crafted to tantalize your taste buds and elevate your home-cooking experience.</p>
              </div>

              <div class="col-3 text-center stats">
                <h2>500+</h2>
                <p>delicious recipes</p>
              </div>

              <div class="col-3 text-center stats">
                <h2>endless</h2>
                <p>creations and ideas</p>
              </div>
            </div>







          </div>

          </div>
          <div class="full-width py-3">
            <div class="container">
            {meals.length > 0 &&
            <>
            <div class="row">
              <div class="col-12">
                <h2 class="text-center mb-4">Today's featured recipes</h2>
              </div>
            </div>


              <div className="random-meal row mb-3">
                {meals.map((meals) => (<MealCard meal={meals} key={meals.idMeals}/>))}

              </div>

              <div class="row">
            <div class="col-12">
              <p class="text-center">   
                 <a class="btn btn-primary" href="/recipes">Get more recipes</a>
              </p>
            </div>
          </div>
            </>

            

          }


          </div>

          

        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <NewsletterSubscribe/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Home;