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
    public class IngredientController : ApiController
    {
        // GET api/<controller>
        public List<IngredientDTO> Get()
        {
            MyKitchen_NEWContext db = new MyKitchen_NEWContext();
            var ingredients = db.Ingredients.Select(i => new IngredientDTO()
            {
                IngredientId = i.IngredientId,
                IngName = i.IngName,
                IngredientsImg = i.IngredientsImg,
                Calories = i.Calories
            }).ToList();

            return ingredients;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]IngredientDTO ing)
        {
            try
            {
                MyKitchen_NEWContext db = new MyKitchen_NEWContext();
                Ingredient ingredientsPush = new Ingredient()
                {
                    //IngredientId = i.IngredientId,  -- maybe we need it?
                    IngName = ing.IngName,
                    IngredientsImg = ing.IngredientsImg,
                    Calories = ing.Calories
                };
                db.Ingredients.Add(ingredientsPush);
                db.SaveChanges();

                return Created(new Uri(Request.RequestUri.AbsoluteUri + ing.IngName), ing);
            }
            catch (Exception ex) { return Content(HttpStatusCode.BadRequest, ex); }
        }



        //Maybe  ====  ====  Post([FromBody]Ingredient ing)

        //db.Ingredients.Add(ing);
        //db.SaveChanges();

        //IngredientDTO newIng = new IngredientDTO(ing.IngName, ing.IngName, ing.IngName);




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