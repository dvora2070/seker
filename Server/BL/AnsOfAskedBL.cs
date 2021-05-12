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

    }
}
