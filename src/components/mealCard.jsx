import React from "react";

const MealCard = ({meal}) => {
    return (
        <>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        A Meal Card
        </>
    );
}

export default MealCard;