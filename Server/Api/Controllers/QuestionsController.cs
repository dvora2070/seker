using BL;
using DTO;
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

        [HttpGet]
        [Route("getQuestionsBySekerId/{sekerId}")]
        public IHttpActionResult getQuestionsBySekerId(int sekerId)
        {
            return Ok(QuestionsBL.getQuestionsBySekerId(sekerId));
        }
        [HttpGet]
        [Route("getQuestionById/{id}")]
        public IHttpActionResult getQuestionById(int id)
        {
            return Ok(QuestionsBL.getQuestionById(id));
        }

        [HttpPost]
        [Route("addQuestion")]
        public IHttpActionResult addQuestion(QuestionsDto quest)
        {
            return Ok(QuestionsBL.addQuestion(quest));
        }

        [HttpPost]
        [Route("updateQuestion")]
        public IHttpActionResult updateQuestion(QuestionsDto quest)
        {
            return Ok(QuestionsBL.updateQuestion(quest));
        }


        [HttpPost]
        [Route("saveQuestions")]
        public IHttpActionResult saveQuestions([FromBody]List<QuestionsDto> quest)
        {
            return Ok(QuestionsBL.saveQuestions(quest));
        }
    }

    public class QuestionsRequest {
        public List<QuestionsDto> lQuestions { get; set; }
    }
}