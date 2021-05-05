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
        public static List<AskedDto> getAllAsked()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var asked = db.Asked.ToList();
                return AskedConvertion.convertToListDto(asked);
            }
        }
    }
}
