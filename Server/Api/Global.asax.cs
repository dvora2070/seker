using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            Timer timer = new Timer(9000000);

            timer.Enabled = true;

            // Setup Event Handler for Timer Elapsed Event
            timer.Elapsed += new ElapsedEventHandler(timer_Elapsed);

            timer.Start();
        }
        // Added the following procedure:
        static void timer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
        {

            BL.SkarimBL.SendSekerReminder();
        }
        protected void Application_BeginRequest()
        {
            if (Request.Headers.AllKeys.Contains("Origin", StringComparer.OrdinalIgnoreCase) &&
                Request.HttpMethod == "OPTIONS")
            {
                Response.Flush();
            }
        }





    }
}
