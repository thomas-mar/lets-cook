import React from "react";

const MealItem = ({ meal }) => {

    meal.strInstructions = meal.strInstructions.replaceAll('\n', '<br/><br/>');

    return (
        <>
            <div class="card bg-light p-5 mb-5">

                <div className="row">
                    <div className="col-12">
                        <h2>{meal.strMeal}</h2>

                    </div>

                </div>
                <div className="row">
                    <div className="col-8">
                        <h4>Instructions</h4>
                        <div dangerouslySetInnerHTML={{ __html: meal.strInstructions }}></div>

                    </div>
                    <div className="col-4">
                        <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MealItem;