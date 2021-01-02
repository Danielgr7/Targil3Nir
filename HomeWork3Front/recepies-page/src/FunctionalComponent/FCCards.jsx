import React from 'react'
import FCRecipeCard from './FCRecipeCard'

export default function FCCards(props) {
    let Cards = props.recipes.map((recipe,index) =>
        <FCRecipeCard recipe={recipe} key={index}/>);
        /*recipeIngredients={FilterIngredients(recipe)}*/

        
        // function FilterIngredients(recipe) {
        //     //let recipeIngredients = props.ingredients.filter(r => r.indId != recipe.ingredients.map(i => console.log(i.ingId)));
        //     //let recipeIngredients2 = [];
            
        //     return recipeIngredients; 
        // }
    return (
        <div>
            {Cards}
        </div>
    )
}
