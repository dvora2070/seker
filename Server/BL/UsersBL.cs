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
    public class UsersBL
    {
        public static List<UsersDto> getAllUsers()
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var users = db.Users.ToList();
                return UsersConvertion.convertToListDto(users);
            }
        }
        public static UsersDto register(UsersDto user)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var newUser = new Users()
                {
                    email_user = user.email_user,
                    name_user = user.name_user,
                    password_user = user.password_user
                };
                db.Users.Add(newUser);
                db.SaveChanges();
                return UsersConvertion.convertToDto(newUser);
            }
        }

        public static UsersDto Login(string userName, string password)
        {
            using (project_skrEntities db = new project_skrEntities())
            {
                var user = db.Users.FirstOrDefault(x=>x.name_user == userName && x.password_user == password);
                if (user == null) return null;
                return UsersConvertion.convertToDto(user);
            }
        }
    }
}
