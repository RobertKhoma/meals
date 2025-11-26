import React from "react";
import { Link } from "react-router-dom";

function MealList({ idMeal, strMeal, strMealThumb }) {
console.log(strMeal);


  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
    
      <div className="card-action">
      <Link className="btn" to={`/product/${idMeal}`}>
          Watch Recept
        </Link>
      </div>
    </div>
  );
}

export default MealList;
