using Homework3BE.DTO;
using MyKitchenDB.EF;
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
            MyKitchenDBContext db = new MyKitchenDBContext();
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
        public void Post([FromBody]string value)
        {
            MyKitchenDBContext db = new MyKitchenDBContext();
            //IngredientId   , IngName , IngredientsImg, Calories   
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