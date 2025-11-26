import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../App";
import Preloader from "../components/Preloader";
import InfoRecipe from "../components/InfoRecipe";

function Recipe() {
  const { idMeal } = useParams();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        const product = await getProductById(idMeal);
        
        setProduct(product.meals[0]);
      } catch (err) {
        setError(err.message || "Не удалось загрузить продукты");
      } finally {
        setLoading(false);
      }
    })();
  }, [idMeal]);

  return (<>{loading ? <Preloader/> : <InfoRecipe products={products}/>
    }</>)
}

export default Recipe;
