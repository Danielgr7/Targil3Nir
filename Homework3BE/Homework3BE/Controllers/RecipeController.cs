using MyKitchenDB.EF;
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
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
            /*
            db.Recipe.Add(new Recipe(
            RecipeFields...
            RecipeId 
            RecipeName
            RecImg
            CookingMethod
            CookTime
            ));
             */
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