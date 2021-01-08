import React from 'react'
import FCRecipeCard from './FCRecipeCard'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    div_RacipeCard: {
        //width:"500px",
        display: "flex",
        flexFlow: "row",
        gap:"20px",
        justifyContent: "center",
        //border: '2px solid #000'



        
         
    }
});



export default function FCCards(props) {
    const classes = useStyles();
    console.dir(props.ingredients)
    console.dir(props.recipes)

    let Cards = props.recipes.map((recipe, index) => {
        let ingredientRecipe = props.ingredients.filter(ingredient => recipe.IngredientsList.includes(ingredient.IngredientId));
        return <FCRecipeCard recipe={recipe} key={index} ingredients={ingredientRecipe} />
    });

    return (
        <div className={classes.div_RacipeCard}>
            {Cards}
        </div>
    )
}
