using BL.convertion;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SkarimBL
    {
        public static List<SkarimDto> getAllSkarim()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var skarim = db.Skarim.ToList();
                return SkarimConvertion.convertToListDto(skarim);
            }

        }

        public static List<SkarimDto> GetSkarimByUserId(int userId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var skarim = db.Skarim.Where(x => x.kod_user == userId).OrderByDescending(x => x.startdate_skr).ToList();
                return SkarimConvertion.convertToListDto(skarim);
            }
        }


        public static bool SendSeker(int sekerId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var seker = db.Skarim.FirstOrDefault(x => x.kod_skr == sekerId);
                var asked = db.Asked.ToList();




                foreach (var ask in asked)
                {
                    //יצירת אוביקט עבור שליחת המייל
                    MailMessage msg = new MailMessage();
                    //הכתובת ממנה ישלח המייל - מומלץ אותם נתונים שיצרת בגמייל
                    msg.From = new MailAddress("disekerit@gmail.com", "דיסקרייט");
                    // למי לשלוח -ניתן להוסיף עוד 
                    msg.To.Add(ask.email_asked);
                    // כתובת לעותק - ניתן להוסיף עוד
                    // נושא המייל
                    msg.Subject = "סקר חדש ממתין לך";
                    // ברירת מחדל תוכן טקסט פשוט HTML עדכון סוג התוכן 
                    msg.IsBodyHtml = true;
                    // Body, Html ניתן לשרשר ערכים. אין צורך להוסיף תגיות HTMLתוכן המייל 

                    var str = "<div style='border: 2px solid #f88010; padding: 10px; width: 320px; text-align: right; direction: rtl; margin-right: 0; float: right;'>" +
"<p style='direction: rtl;'>הי <strong>{0}</strong></p> " +
  "< p style='direction: rtl;'>סקר חדש בנושא <strong>{1}</strong> ממתין לך באתר.</p> " +
"< p style='direction: rtl;padding:10px 0;'><a title='כניסה לסקר' href='http://localhost:4200/seker/{2}/{3}' target='_blank' style='color:white;background-color:#f88010;padding:7px 20px;border-radius:10px; margin-top:20px;text-decoration: none;cursor:pointer;font-weight:bold;'>כניסה לסקר</a></p></div>";

                    str = String.Format(str, ask.name_asked, seker.name_skr, seker.kod_skr, ask.kod_asked);
                    StringBuilder htmlBody = new StringBuilder(str);
                    // HTML יצירת מעטפת לקוד 
                    var htmlView = AlternateView.CreateAlternateViewFromString(htmlBody.ToString(), new ContentType("text/html"));
                    //עדכון עבור זיהוי תוכן בעברית 
                    htmlView.ContentType.CharSet = Encoding.UTF8.WebName;
                    //נעדכן את התוכן של ההודעה 
                    msg.AlternateViews.Add(htmlView);
                    // (ערכים קבועים אין צורך לשנות) Gmail יצירת אוביקט לשרת שליחת המייל של.
                    SmtpClient smtp = new SmtpClient();
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    //פרטי החשבון שיצרת, הכתובת והסיסמא
                    smtp.Credentials = new NetworkCredential("disekerit@gmail.com", "Dvora1234");
                    smtp.EnableSsl = true;
                    smtp.Timeout = int.MaxValue;
                    //הפונקציה ששולחת בפועל את המייל 
                    smtp.Send(msg);
                }
                return true;
                // return SkarimConvertion.convertToListDto(skarim);
            }
        }


        
        public static SkarimDto GetSkarimById(int id)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var skarim = db.Skarim.FirstOrDefault(x => x.kod_skr == id);
                return SkarimConvertion.ConvertToDto(skarim);
            }
        }
        public static SkarimDto AddSeker(SkarimDto addSeker)
        {
            using (project_skrEntities db = new project_skrEntities())
            {

                var seker = SkarimConvertion.convertToSkarim(addSeker);
                db.Skarim.Add(seker);
                db.SaveChanges();
                return SkarimConvertion.ConvertToDto(seker);
            }
        }
        public static bool DeleteSeker(int sekerId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {

                //TODO
                return true;
            }
        }
        public static SkarimDto UpdateSeker(SkarimDto updatedSeker)
        {
            using (project_skrEntities db = new project_skrEntities())
            {

                var seker = db.Skarim.FirstOrDefault(x => x.kod_skr == updatedSeker.kod_skr);
                seker.name_skr = updatedSeker.name_skr;
                seker.logo_skr = updatedSeker.logo_skr;
                seker.startdate_skr = updatedSeker.startdate_skr;
                seker.lastdate_skr = updatedSeker.lastdate_skr;
                seker.jpg_skr = updatedSeker.jpg_skr;
                seker.fountcolor_skr = updatedSeker.fountcolor_skr;
                seker.bgcolor_skr = updatedSeker.bgcolor_skr;
                db.SaveChanges();
                return SkarimConvertion.ConvertToDto(seker);
            }
        }

        public static bool UploadImage(int sekerId, string fileName)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var seker = db.Skarim.FirstOrDefault(x => x.kod_skr == sekerId);
                seker.logo_skr = fileName;
                db.SaveChanges();
                return true;
            }
        }
    }
}


