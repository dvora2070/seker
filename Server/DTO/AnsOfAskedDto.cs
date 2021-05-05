using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class AnsOfaskedDto
    {
        public int kod_quest { get; set; }
        public int kod_asked { get; set; }
        public int? kod_ans { get; set; }


        public string text_ans { get; set; }
        public string answer { get; set; }

    }
}
