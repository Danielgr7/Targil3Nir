import React from 'react' 
import { Link } from 'react-router-dom';


const navbar = <div id="navbar">
    <Link to="/">&nbsp;&nbsp; MyKitchen &nbsp;&nbsp;</Link> |
    <Link to="/FCCreateNewIngredient">&nbsp;&nbsp; Create New Ingredient &nbsp;&nbsp;</Link> |
    <Link to="/FCCreateNewRecipe">&nbsp;&nbsp; Create New Recipe &nbsp;&nbsp;</Link>
</div>
export default navbar;
