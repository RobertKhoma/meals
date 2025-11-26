import React from 'react'
import CategoryItem from './CategoryItem'




function CategoryList({catalog=[]}) {

if (!catalog.length) {
    return <h3>Catalog is Empty</h3>
}

  return (
    <div className='list'>{
        catalog.map(function (item) {
            return <CategoryItem key={item.idCategory} {...item}/>
        })
    }</div>
  )
}

export default CategoryList