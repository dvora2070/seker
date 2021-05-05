using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class AnsOfAskedConvertion
    {
        public static AnsOfaskedDto convertToDto(AnsOfAsked ans)
        {
            AnsOfaskedDto newAns = new AnsOfaskedDto();
            newAns.kod_ans = ans.kod_ans;
            newAns.kod_asked = ans.kod_asked;
            newAns.kod_quest = ans.kod_quest;
            newAns.answer = ans.answer;
            return newAns;
        }

        public static List<AnsOfaskedDto> convertToListDto(List<AnsOfAsked> ans)
        {

            List<AnsOfaskedDto> newAns = new List<AnsOfaskedDto>();
            ans.ForEach(x =>
            {
                newAns.Add(convertToDto(x));
            });
            return newAns;
        }

        public static AnsOfAsked convertToAnsOfAsked(AnsOfaskedDto ans)
        {
            AnsOfAsked newAns = new AnsOfAsked();
            newAns.kod_ans = ans.kod_ans;
            newAns.kod_asked = ans.kod_asked;
            newAns.kod_quest = ans.kod_quest;
            newAns.answer = ans.answer;
            return newAns;

        }

    }
}

