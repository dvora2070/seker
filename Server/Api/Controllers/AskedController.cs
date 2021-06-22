using BL;
using DTO;
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
        [Route("GetAllAsked/{userId}")]
        public IHttpActionResult GetAllAsked(int userId)
        {
            return Ok(AskedBL.getAllAsked(userId));
        }



        //

        [HttpGet]
        [Route("getAskedById/{id}")]
        public IHttpActionResult getAskedById(int id)
        {
            return Ok(AskedBL.getAskedById(id));
        }


        [HttpPost]
        [Route("AddAsked")]
        public IHttpActionResult AddAsked(AskedDto asked)
        {
            return Ok(AskedBL.AddAsked(asked));
        }

        [HttpPost]
        [Route("UpdateAsked")]
        public IHttpActionResult UpdateAsked(AskedDto asked)
        {
            return Ok(AskedBL.UpdateAsked(asked));
        }
        [HttpPost]
        [Route("uploadAsked")]
        public IHttpActionResult UploadAsked(List<AskedDto> asked)
        {
            return Ok(AskedBL.UploadAsked(asked));
        }

        
    }
}