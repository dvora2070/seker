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


        [HttpGet]
        [Route("getQuestionBySekerAndAskedId/{sekerId}/{askedId}")]
        public IHttpActionResult getQuestionBySekerAndAskedId(int sekerId, int askedId)
        {
            return Ok(AnsOfAskedBL.getQuestionBySekerAndAskedId(sekerId, askedId));
        }


    }
}