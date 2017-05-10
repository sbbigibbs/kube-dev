using System.Collections.Generic;
using iHerb.Checkout.API.Services;
using Microsoft.AspNetCore.Mvc;
using iHerb.Checkout.SPI;

namespace iHerb.Checkout.API.Controllers
{
    [Route("api/v2/[controller]")]
    public class BasketController : Controller
    {
        protected readonly WcfProxy<IBasketManager> Proxy;

        // TODO public BasketController(WcfProxy<IBasketManager> proxy)
        // {
        //     Proxy = proxy;
        // }

        [HttpPost]
        public void ApplyCoupon([FromBody]string couponCode)
        {
            // TODO Proxy.Invoke(j => j.AddProductToBasket(...))
        }

        // GET api/v2/basket
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/v2/basket/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/v2/basket
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/v2/basket/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/v2/basket/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
