using BL.convertion;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
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


