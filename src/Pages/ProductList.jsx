import React from 'react'
import MealList from '../components/MealList'

function ProductList({products}) {


  return (
    products.map(function (product) {
        return <MealList key={product.idMeal} {...product}/>
    })
  )
}

export default ProductList