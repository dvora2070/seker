using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class QuestionsDto
    {
        public int kod_quest { get; set; }
        public Nullable<int> kod_skr { get; set; }
        public Nullable<int> num_quest { get; set; }
        public string text_quest { get; set; }
        public Nullable<int> type_ans { get; set; }
        public byte[] ismust_quest { get; set; }

    }
}
