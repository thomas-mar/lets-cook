import React from "react";

const Categories = ({category, getMealsByCategory, selectedCategory}) => {

    return (
        <>
        <span className={`badge rounded-pill me-2 py-2 px-3 ${selectedCategory === category.strCategory ? 'bg-primary' : 'bg-secondary'} ` } onClick={event => getMealsByCategory(category.strCategory)}>{category.strCategory}</span>

        </>
    );
}

export default Categories;