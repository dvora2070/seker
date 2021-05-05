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
    public class AnsOfQuestBL
    {
        public static List<AnsOfQuestDto> getAllAnsOfQuest()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var quest = db.AnsOfQuest.ToList();
                return AnsOfQuestConvertion.convertToListDto(quest);
            }
        }
    }
}
