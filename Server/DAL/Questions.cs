//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Questions
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Questions()
        {
            this.AnsOfAsked = new HashSet<AnsOfAsked>();
            this.AnsOfQuest = new HashSet<AnsOfQuest>();
        }
    
        public int kod_quest { get; set; }
        public Nullable<int> kod_skr { get; set; }
        public Nullable<int> num_quest { get; set; }
        public string text_quest { get; set; }
        public Nullable<int> type_ans { get; set; }
        public bool ismust_quest { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AnsOfAsked> AnsOfAsked { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AnsOfQuest> AnsOfQuest { get; set; }
        public virtual Skarim Skarim { get; set; }
        public virtual TypeAnswers TypeAnswers { get; set; }
    }
}
