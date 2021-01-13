using MyKitchenDB.EF_NEW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Homework3BE.DTO
{
    public class RecipeDTO
    {
        public int RecipeId;
        public string RecipeName;
        public string RecImg;
        public string CookingMethod;
        public double? CookTime;
        public List<IngredientsInRecipesDTO> IngredientsList;  
    }
}