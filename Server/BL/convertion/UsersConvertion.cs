using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BL.convertion
    {
        public class UsersConvertion
        {
            //המרה לDTO - המרה לצד לקוח
            public static UsersDto convertToDto(Users u)
            {
                UsersDto newUser = new UsersDto();
                newUser.email_user = u.email_user;
                newUser.password_user = u.password_user;
                newUser.kod_user = u.kod_user;
                newUser.name_user = u.name_user;
                return newUser;
            }
            public static List<UsersDto> convertToListDto(List<Users> u)
            {
                List<UsersDto> newUser = new List<UsersDto>();
                u.ForEach(x =>
                {
                    newUser.Add(convertToDto(x));
                });
                return newUser;
            }

            //המרה לDB - להוספה עדכון ומחיקה - CUD
            public static Users convertToUser(UsersDto u)
            {
                Users newUser = new Users();
                newUser.email_user = u.email_user;
                newUser.password_user = u.password_user;
                newUser.kod_user = u.kod_user;
                newUser.name_user = u.name_user;
                return newUser;
            }
        }
    }





