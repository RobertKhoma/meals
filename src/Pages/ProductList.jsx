import React from "react";
import MealList from "../components/MealList";
import Button from "../components/Button";

function ProductList({ products }) {
  return (
    <div className="list">
      {products.map(function (product) {
        return <MealList key={product.idMeal} {...product} />;
      })}
    </div>
  );
}

export default ProductList;
