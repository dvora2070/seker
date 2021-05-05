using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/AnsOfAsked")]

    public class AnsOfAskedController : ApiController
    {

        [HttpGet]
        [Route("GetAllAnsOfAsked")]
        public IHttpActionResult GetAllAnsOfAsked()
        {
            return Ok(AnsOfAskedBL.getAllAnsOfAsked());
        }
    }
}