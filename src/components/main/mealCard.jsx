import React from "react";

const MealCard = ({meal}) => {

    //meal.strInstructions = meal.strInstructions.replaceAll('\n', '<br/><br/>');

    return (
        <>
        <div className="col-3 mb-3">
            <div className="mealcard card h-100">  
                <img class="card-img-top" src={meal.strMealThumb} alt={meal.strMeal}/>
                <div className="card-body"> 
                <h3 className="text-center"><a href={'/meal?i=' + meal.idMeal}>{meal.strMeal}</a></h3>

                </div>

            </div>

        </div>



        </>
    );
}

export default MealCard;