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

        public static List<AnsOfaskedDto> getQuestionBySekerAndAskedId(int sekerId, int askedId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var qIds = db.Questions.Where(x => x.kod_skr == sekerId).Select(x => x.kod_quest).ToList();
                var ans = db.AnsOfAsked.
                    Where(x => x.kod_asked == askedId && qIds.Contains(x.kod_quest)).ToList();
                return AnsOfAskedConvertion.convertToListDto(ans);
            }
        }


        public static bool saveSekerAns(List<AnsOfaskedDto> answersOfAsked)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                //ריצה על תשובות הנסקר
                foreach (var ans in answersOfAsked)
                {
                    var ansDb = db.AnsOfAsked.FirstOrDefault(x=>x.kod_quest == ans.kod_quest
                    && x.kod_asked == ans.kod_asked);
                    // הוספת תשובה של הנסקר אם לא קיים
                    if (ansDb == null)
                    {
                        var newAns = AnsOfAskedConvertion.convertToAnsOfAsked(ans);
                        db.AnsOfAsked.Add(newAns);
                    }
                    //עדכון תוכן השתובה
                    else {
                        ansDb.answer = ans.answer;
                        ansDb.kod_ans = ans.kod_ans;

                    }
                }
                db.SaveChanges();
                return true;
            }
        }
    }
}
