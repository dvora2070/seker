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
    
    public partial class AnsOfQuest
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AnsOfQuest()
        {
            this.AnsOfAsked = new HashSet<AnsOfAsked>();
        }
    
        public int kod_ans { get; set; }
        public Nullable<int> kod_quest { get; set; }
        public string text_ans { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AnsOfAsked> AnsOfAsked { get; set; }
        public virtual Questions Questions { get; set; }
    }
}
