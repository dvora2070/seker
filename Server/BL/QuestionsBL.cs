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
    public class QuestionsBL
    {
        public static List<QuestionsDto> getAllQuestions()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var questions = db.Questions.ToList();
                return QuestionsConvertion.convertToListDto(questions);
            }
        }
    }
}
