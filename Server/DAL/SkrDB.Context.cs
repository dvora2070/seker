﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class project_skrEntities : DbContext
    {
        public project_skrEntities()
            : base("name=project_skrEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AnsOfAsked> AnsOfAsked { get; set; }
        public virtual DbSet<AnsOfQuest> AnsOfQuest { get; set; }
        public virtual DbSet<Asked> Asked { get; set; }
        public virtual DbSet<Questions> Questions { get; set; }
        public virtual DbSet<Skarim> Skarim { get; set; }
        public virtual DbSet<TypeAnswers> TypeAnswers { get; set; }
        public virtual DbSet<Users> Users { get; set; }
    }
}
