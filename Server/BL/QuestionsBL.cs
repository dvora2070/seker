using BL.convertion;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public static QuestionsDto getQuestionById(int id)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var question = db.Questions.Include("AnsOfQuest").FirstOrDefault(x => x.kod_quest == id);
                return QuestionsConvertion.convertToDto(question);
            }
        }

        public static List<QuestionsDto> getQuestionsBySekerId(int sekerId)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var questions = db.Questions.Include("AnsOfQuest").Where(x => x.kod_skr == sekerId).ToList();
                return QuestionsConvertion.convertToListDto(questions);
            }
        }

        public static QuestionsDto updateQuestion(QuestionsDto quest)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var question = db.Questions.Include("AnsOfQuest").FirstOrDefault(x => x.kod_quest == quest.kod_quest);
                if (question == null) return null;


                question.ismust_quest = quest.ismust_quest;
                question.text_quest = quest.text_quest;
                question.num_quest = quest.num_quest;
                question.type_ans = quest.type_ans;
                question.AnsOfQuest = AnsOfQuestConvertion.convertToAnsOfQuestList(quest.AnsOfQuest);
                db.SaveChanges();
                return QuestionsConvertion.convertToDto(question);
            }
        }

        public static QuestionsDto addQuestion(QuestionsDto quest)
        {
            using (project_skrEntities db = new project_skrEntities())
            {

                var q = QuestionsConvertion.convertToQuestions(quest);
                db.Questions.Add(q);
                db.SaveChanges();
                return QuestionsConvertion.convertToDto(q);
            }
        }


        public static bool saveQuestions(List<QuestionsDto> questions)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                foreach (var quest in questions)
                {
                    var question = db.Questions.Include("AnsOfQuest")
                        .FirstOrDefault(x => x.kod_quest == quest.kod_quest);
                    if (question == null)
                    {

                        var q = QuestionsConvertion.convertToQuestions(quest);
                        db.Questions.Add(q);
                    }
                    else
                    {
                        question.ismust_quest = quest.ismust_quest;
                        question.text_quest = quest.text_quest;
                        question.num_quest = quest.num_quest;
                        question.type_ans = quest.type_ans;

                        //  question.AnsOfQuest = AnsOfQuestConvertion.convertToAnsOfQuestList(quest.AnsOfQuest);


                        //db.Entry(question.AnsOfQuest).State = EntityState.Detached;
                        //if (entity.GetType().GetProperty("Id") != null)
                        //{
                        //    entity.GetType().GetProperty("Id").SetValue(entity, 0);
                        //}
                        //return entity;


                        //  var ans = AnsOfQuestConvertion.convertToAnsOfQuestList(quest.AnsOfQuest);
                        question.AnsOfQuest = new List<AnsOfQuest>();
                        foreach (var ans in quest.AnsOfQuest)
                        {
                            var answ = db.AnsOfQuest.FirstOrDefault(x => x.kod_ans == ans.kod_ans);
                            if (answ == null) question.AnsOfQuest.Add(AnsOfQuestConvertion.convertToAnsOfQuest(ans));
                            else {
                                answ.text_ans = ans.text_ans;
                                question.AnsOfQuest.Add(answ);
                            }

                        }
                        var existingsAns = db.AnsOfQuest.Where(x => x.kod_quest == quest.kod_quest).ToList();
                        foreach (var existingAns in existingsAns)
                        {

                            if (!question.AnsOfQuest.Any(c => c.kod_ans == existingAns.kod_ans))
                            {
                                db.AnsOfQuest.Remove(existingAns);
                                //  question.AnsOfQuest.Remove(existingAns);
                            }


                        }
                    }

                }

                db.SaveChanges();
                return true;
            }
        }



    }
}
