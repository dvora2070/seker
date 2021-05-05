using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class SkarimConvertion
    {
        public static SkarimDto ConvertToDto(Skarim s)
        {
            SkarimDto newSeker = new SkarimDto();
            newSeker.kod_skr = s.kod_skr;
            newSeker.name_skr = s.name_skr;
            newSeker.kod_user = s.kod_user;
            newSeker.startdate_skr = s.startdate_skr;
            newSeker.lastdate_skr = s.lastdate_skr;
            newSeker.logo_skr = s.logo_skr;
            newSeker.jpg_skr = s.jpg_skr;
            newSeker.bgcolor_skr = s.bgcolor_skr;
            newSeker.fountcolor_skr = s.fountcolor_skr;
            return newSeker;
        }

      

        public static List<SkarimDto> convertToListDto(List<Skarim> s)
        {
            List<SkarimDto> newSeker = new List<SkarimDto>();
            s.ForEach(x =>
            {
                newSeker.Add(ConvertToDto(x));
            });
            return newSeker;
              
        }

        public static Skarim convertToSkarim(SkarimDto s)
        {
            Skarim newSeker = new Skarim();
            newSeker.kod_skr = s.kod_skr;
            newSeker.name_skr = s.name_skr;
            newSeker.kod_user = s.kod_user;
            newSeker.startdate_skr = s.startdate_skr;
            newSeker.lastdate_skr = s.lastdate_skr;
            newSeker.logo_skr = s.logo_skr;
            newSeker.jpg_skr = s.jpg_skr;
            newSeker.bgcolor_skr = s.bgcolor_skr;
            newSeker.fountcolor_skr = s.fountcolor_skr;
            return newSeker;
        }
    }
}
