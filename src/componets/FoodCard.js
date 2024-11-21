import React from 'react'

export default function FoodCard(props) {

  let {items} = props


  return (
    <div >
           <h4>{items?.recipe?.label}</h4>
           <img src={items?.recipe.image} alt={items.recipe?.label} />
           <p>calories: {items
           ?.recipe?.calories}</p>
    </div>
  )
}
