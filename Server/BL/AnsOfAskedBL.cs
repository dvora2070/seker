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
    public class AnsOfAskedBL
    {
        public static List<AnsOfaskedDto> getAllAnsOfAsked()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var ansOfAsked = db.AnsOfAsked.ToList();
                return AnsOfAskedConvertion.convertToListDto(ansOfAsked);
            }
        }
    }
}
