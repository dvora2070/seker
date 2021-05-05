using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/AnsOfQuest")]

    public class AnsOfQuestController : ApiController
    {

        [HttpGet]
        [Route("GetAllAnsOfQuest")]
        public IHttpActionResult GetAllAnsOfQuest()
        {
            return Ok(AnsOfQuestBL.getAllAnsOfQuest());
        }
    }
}