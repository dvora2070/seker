using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Api
{
    [RoutePrefix("api/Questions")]
    public class QuestionsController : ApiController
    {
        
            [HttpGet]
            [Route("GetAllQuestions")]
            public IHttpActionResult GetAllQuestions()
            {
                return Ok(QuestionsBL.getAllQuestions());
            }
       
    }
}