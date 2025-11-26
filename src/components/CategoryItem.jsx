import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({
  idCategory,
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/category/${strCategory}`}>
          Watch Category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
