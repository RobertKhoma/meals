import React from "react";
import { useNavigate } from "react-router-dom";

function InfoRecipe({ products }) {
  console.log(products);
 const navigate = useNavigate()
  return (
    <div>
      <img src={products.strMealThumb} alt={products.strMealThumb} />
      <h1>{products.strMeal}</h1>
      <p>{products.strCategory}</p>
      <p>{products.strArea}</p>
      <p>{products.strInstructions}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(products).map((key) => {
            if (key.includes("Ingredient") && products[key]) {
              return (
                <tr key={key}>
                  <td>{products[key]}</td>
                  <td>{products[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {products.strYoutube ? (<div>
        <h5>Video reside</h5>
        <iframe
                title={products.idMeal}
                src={`https://www.youtube.com/embed/${products.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
              <button onClick={()=>{navigate(-1)}}>Beck</button>
      </div>) : null}
    </div>
  );
}

export default InfoRecipe;
