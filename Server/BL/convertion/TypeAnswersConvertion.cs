using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class TypeAnswersConvertion
    {
        public static TypeAnswersDto ConvertToDto(TypeAnswers t)
        {
            TypeAnswersDto newType = new TypeAnswersDto();
            newType.kod_type = t.kod_type;
            newType.name_type = t.name_type;
            return newType;

        }

        public static List<TypeAnswersDto> convertToListDto(List<TypeAnswers> t)
        {
            List<TypeAnswersDto> newType = new List<TypeAnswersDto>();
            t.ForEach(x =>
            {
                newType.Add(ConvertToDto(x));
            });
            return newType;
        }

        public static TypeAnswers convertToTypeAnswers(TypeAnswersDto t)
        {
            TypeAnswers newType = new TypeAnswers();
            newType.kod_type = t.kod_type;
            newType.name_type = t.name_type;
            return newType;

        }
    }
}
