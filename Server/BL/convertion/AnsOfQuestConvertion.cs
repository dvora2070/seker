using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class AnsOfQuestConvertion
    {
        public static AnsOfQuestDto ConvertToDto(AnsOfQuest aq)
        {
            AnsOfQuestDto newQuest = new AnsOfQuestDto();
            newQuest.kod_ans = aq.kod_ans;
            newQuest.kod_quest = aq.kod_quest;
            newQuest.text_ans = aq.text_ans;
            return newQuest;

        }

        public static List<AnsOfQuestDto> convertToListDto(List<AnsOfQuest> aq)
        {
            List<AnsOfQuestDto> newQuest = new List<AnsOfQuestDto>();
            aq.ForEach(x =>
            {
                newQuest.Add(ConvertToDto(x));
            });
            return newQuest;
        }

        public static List<AnsOfQuest> convertToAnsOfQuestList(List<AnsOfQuestDto> aq)
        {
            List<AnsOfQuest> newQuest = new List<AnsOfQuest>();
            aq.ForEach(x =>
            {
                newQuest.Add(convertToAnsOfQuest(x));
            });
            return newQuest;
        }
        public static AnsOfQuest convertToAnsOfQuest(AnsOfQuestDto aq)
        {
            AnsOfQuest newQuest = new AnsOfQuest();
            newQuest.kod_ans = aq.kod_ans;
            newQuest.kod_quest = aq.kod_quest;
            newQuest.text_ans = aq.text_ans;
            return newQuest;


        }
    }
}
