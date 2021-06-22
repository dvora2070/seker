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
    public class AskedBL
    {
        public static List<AskedDto> getAllAsked(int userId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var asked = db.Asked.Where(x => x.kod_user == userId).ToList();
                return AskedConvertion.convertToListDto(asked);
            }
        }

        public static AskedDto getAskedById(int id)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var asked = db.Asked.FirstOrDefault(x => x.kod_asked == id);
                return AskedConvertion.convertToDto(asked);
            }
        }


        public static AskedDto AddAsked(AskedDto ask)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var existsAsk = db.Asked.FirstOrDefault(x => x.email_asked == ask.email_asked);
                if (existsAsk != null) return null;
                var newask = new Asked()
                {
                    email_asked = ask.email_asked,
                    name_asked = ask.name_asked,
                    phone_asked = ask.phone_asked,
                    kod_user =ask.kod_user
                };
                db.Asked.Add(newask);
                db.SaveChanges();
                return AskedConvertion.convertToDto(newask);
            }
        }

        public static bool UploadAsked(List<AskedDto> asked)
        {
            foreach (var ask in asked)
            {
                AddAsked(ask);
            }
            return true;
        }

        public static AskedDto UpdateAsked(AskedDto ask)
        {

            using (project_skrEntities db = new project_skrEntities())
            {
                var asked = db.Asked.FirstOrDefault(x => x.kod_asked == ask.kod_asked);
                if (asked == null) return null;
                asked.email_asked = ask.email_asked;
                asked.name_asked = ask.name_asked;
                asked.phone_asked = ask.phone_asked;

                db.SaveChanges();
                return AskedConvertion.convertToDto(asked);
            }
        }
    }
}
