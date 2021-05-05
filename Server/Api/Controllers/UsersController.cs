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
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {

        [HttpGet]
        [Route("GetAllUsers")]
        public IHttpActionResult GetAllUsers()
        {
            return Ok(UsersBL.getAllUsers());
        }



        [HttpGet]
        [Route("login/{userName}/{password}")]
        public IHttpActionResult Login(string userName,string password)
        {
            return Ok(UsersBL.Login(userName, password));
        }

        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register(UsersDto user)
        {
            return Ok(UsersBL.register(user));
        }
    }
}
