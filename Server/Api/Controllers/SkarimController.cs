using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("api/Skarim")]
    public class SkarimController : ApiController
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
        [HttpGet]
        [Route("GetSkarimById/{id}")]
        public IHttpActionResult GetSkarimById(int id)
        {
            return Ok(SkarimBL.GetSkarimById(id));
        }
        [HttpPost]
        [Route("AddSeker")]
        public IHttpActionResult AddSeker(SkarimDto seker)
        {
            return Ok(SkarimBL.AddSeker(seker));
        }

        [HttpPost]
        [Route("UpdateSeker")]
        public IHttpActionResult UpdateSeker(SkarimDto seker)
        {
            return Ok(SkarimBL.UpdateSeker(seker));
        }


        [HttpPost]
        [Route("uploadImage")]
        public IHttpActionResult uploadImage()
        {

            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            var postedFile = httpRequest.Files["Image"];
            var sekerId = httpRequest.Form["SekerId"];
            //Create custom filename
            if (postedFile != null)
            {
                var fileName = Guid.NewGuid() + ".jpg";
                var filePath = HttpContext.Current.Server.MapPath("~/images/" + fileName);
                postedFile.SaveAs(filePath);
                bool result = SkarimBL.UploadImage(int.Parse( sekerId), fileName);
                if (result)
                    return Ok("success");

            }
            return BadRequest("problem");

        }
    }
}
