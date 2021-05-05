using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/Skarim")]
    public class SkarimControllers : ApiController
    {
        [HttpGet]
        [Route("GetAllSkarim")]
        public IHttpActionResult GetAllSkarim()
        {
            return Ok(SkarimBL.getAllSkarim());
        }
        [HttpGet]
        [Route("GetSkarimByUserId/{userId}")]
        public IHttpActionResult GetSkarimByUserId(int userId)
        {
            return Ok(SkarimBL.GetSkarimByUserId(userId));
        }
    }
}