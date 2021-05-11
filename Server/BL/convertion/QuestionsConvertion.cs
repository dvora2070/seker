using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertion
{
    public class QuestionsConvertion
    {
        public static QuestionsDto convertToDto(Questions q)
        {
            QuestionsDto newQuestions = new QuestionsDto();
            newQuestions.kod_quest = q.kod_quest;
            newQuestions.kod_skr = q.kod_skr;
            newQuestions.num_quest = q.num_quest;
            newQuestions.text_quest = q.text_quest;
            newQuestions.type_ans = q.type_ans;
            newQuestions.ismust_quest = q.ismust_quest;

            if (q.AnsOfQuest != null) {
                newQuestions.AnsOfQuest = AnsOfQuestConvertion.convertToListDto(q.AnsOfQuest.ToList());
            }
            return newQuestions;

        }

        public static List<QuestionsDto> convertToListDto(List<Questions> q)
        {
            List<QuestionsDto> newQuestions = new List<QuestionsDto>();
            q.ForEach(x =>
            {
                newQuestions.Add(convertToDto(x));
            });
            return newQuestions;

        }

        public static Questions convertToQuestions(QuestionsDto q)
        {
            Questions newQuestions = new Questions();
            newQuestions.kod_quest = q.kod_quest;
            newQuestions.kod_skr = q.kod_skr;
            newQuestions.num_quest = q.num_quest;
            newQuestions.text_quest = q.text_quest;
            newQuestions.type_ans = q.type_ans;
            newQuestions.ismust_quest = q.ismust_quest;
            if (q.AnsOfQuest != null)
            {
                newQuestions.AnsOfQuest = AnsOfQuestConvertion.convertToAnsOfQuestList(q.AnsOfQuest.ToList());
            }

            return newQuestions;
        }
    }
}
