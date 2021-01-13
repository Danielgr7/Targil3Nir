using Homework3BE.DTO;
using MyKitchenDB.EF_NEW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Homework3BE.Controllers
{
    public class RecipeController : ApiController
    {
        // GET api/<controller>
        public List<RecipeDTO> Get()
        {
            MyKitchen_NEWContext db = new MyKitchen_NEWContext();
            var list = db.Recipes.ToList();
            var recipes = db.Recipes.Select(r => new RecipeDTO()
            {
                RecipeId = r.RecipeId,
                RecipeName = r.RecipeName,
                RecImg = r.RecImg,
                CookingMethod = r.CookingMethod,
                CookTime = r.CookTime,
                IngredientsList = r.Ingredients.Select(ir => new IngredientsInRecipesDTO()
                {
                    RecipeId = r.RecipeId,
                    IngredientId = ir.IngredientId
                }).ToList()
            }).ToList();
            return recipes;

        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]RecipeDTO recipeDTO)
        {
            MyKitchen_NEWContext db = new MyKitchen_NEWContext();

            try
            {
                Recipe recipePush = new Recipe();
                recipePush.RecipeName = recipeDTO.RecipeName;
                recipePush.RecImg = recipeDTO.RecImg;
                recipePush.CookingMethod = recipeDTO.CookingMethod;
                recipePush.CookTime = recipeDTO.CookTime;
                //Recipe recipePush = new Recipe()
                //{
                //    RecipeName = recipeDTO.RecipeName,
                //    RecImg = recipeDTO.RecImg,
                //    CookingMethod = recipeDTO.CookingMethod,
                //    CookTime = recipeDTO.CookTime

                //};
                foreach (var item in recipeDTO.IngredientsList)
                {
                    recipePush.Ingredients.Add(db.Ingredients.Where(x => x.IngredientId == item.IngredientId).FirstOrDefault());
                }
                db.Recipes.Add(recipePush);
                db.SaveChanges();

                return Created(new Uri(Request.RequestUri.AbsoluteUri + recipeDTO.RecipeName), recipeDTO);
            }
            catch (Exception ex) { return Content(HttpStatusCode.BadRequest, ex); }
        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}