import React from "react";

const Categories = ({category}) => {


    return (
        <>

        <div className="col-2">
            <div className="card my-2">
                <img className="card-img-top w-100" src={category.strCategoryThumb} alt={category.strCategory}/>
                <div clasName="card-body">
                    <h5 className="text-center py-3">{category.strCategory}</h5>
                </div>
            </div>
        </div>

        </>
    );
}

export default Categories;