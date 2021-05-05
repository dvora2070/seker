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
    public class TypeAnswersBL
    {
        public static List<TypeAnswersDto> GetAllTypeAnswers()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var type = db.TypeAnswers.ToList();
                return TypeAnswersConvertion.convertToListDto(type);
            }

        }
    }
}
