using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class AskedConvertion
    {
        public static AskedDto convertToDto(Asked a)
        {
            AskedDto newAsked = new AskedDto();
            newAsked.kod_asked = a.kod_asked;
            newAsked.name_asked = a.name_asked;
            newAsked.email_asked = a.email_asked;
            newAsked.phone_asked = a.phone_asked;
            newAsked.kod_user = a.kod_user;
            return newAsked;
        }

        public static List<AskedDto> convertToListDto(List<Asked> a)
        {
            List<AskedDto> newAsked = new List<AskedDto>();
            a.ForEach(x =>
            {
                newAsked.Add(convertToDto(x));
            });
            return newAsked;
        }

        public static Asked convertToAsked(AskedDto a)
        {
            Asked newAsked = new Asked();
            newAsked.kod_asked = a.kod_asked;
            newAsked.name_asked = a.name_asked;
            newAsked.email_asked = a.email_asked;
            newAsked.phone_asked = a.phone_asked;
            newAsked.kod_user = a.kod_user;
            return newAsked;

        }

    }
}
