import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategoryName } from "../App";
import Preloader from "../components/Preloader";
import ProductList from "./ProductList";
import Button from "../components/Button";



function Category() {
    const { name } = useParams();
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
  
    useEffect(() => {
      (async () => {
        try {
          setLoading(true);
          setError("");
          const product = await getProductsByCategoryName(name);
  
          
          setProduct(product.meals);
        } catch (err) {
          setError(err.message || "Не удалось загрузить продукты");
        } finally {
          setLoading(false);
        }
      })();
    }, [name]);
  
    if (error) return <div>{error} error</div>;

  
    return (<><Button/>{!products.length && loading ? <Preloader/> :<ProductList products={products} />}</>)
  }
  
  export default Category;