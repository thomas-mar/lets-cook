import React from "react";

const MealCard = ({meal}) => {

    meal.strInstructions = meal.strInstructions.replaceAll('\n', '<br/><br/>');

    return (
        <>
        <div className="row">
            <div className="col-12">
                <h1>{meal.strMeal}</h1>

            </div>

        </div>
        <div className="row">
            <div className="col-8">
                <h3>Instructions</h3>
                <div dangerouslySetInnerHTML={{__html: meal.strInstructions}}></div>

            </div>
            <div className="col-4">
                <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal}/>
            </div>
        </div>

        </>
    );
}

export default MealCard;