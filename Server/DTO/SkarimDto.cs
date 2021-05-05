using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SkarimDto
    {
        public int kod_skr { get; set; }
        public string name_skr { get; set; }
        public Nullable<int> kod_user { get; set; }
        public Nullable<System.DateTime> startdate_skr { get; set; }
        public Nullable<System.DateTime> lastdate_skr { get; set; }
        public string logo_skr { get; set; }
        public string jpg_skr { get; set; }
        public string bgcolor_skr { get; set; }
        public string fountcolor_skr { get; set; }

       
    }


}
