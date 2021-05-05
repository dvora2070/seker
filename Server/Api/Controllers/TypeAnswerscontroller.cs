using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/TypeAnswers")]

    public class TypeAnswerscontroller : ApiController
    {

        [HttpGet]
        [Route("GetAllTypeAnswers")]
        public IHttpActionResult GetAllTypeAnswers()
        {
            return Ok(TypeAnswersBL.GetAllTypeAnswers());
        }

    }
}