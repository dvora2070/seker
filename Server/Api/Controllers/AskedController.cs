using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/Asked")]
    public class AskedController : ApiController
    {
        [HttpGet]
        [Route("GetAllAsked")]
        public IHttpActionResult GetAllAsked()
        {
            return Ok(AskedBL.getAllAsked());
        }
    }
}