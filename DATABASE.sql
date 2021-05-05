create database project_skr
use project_skr

create table Users
(
kod_user int primary key identity(100,1),
name_user nvarchar(20),
password_user nvarchar(10),
email_user varchar
)

create table Asked
( 
kod_asked int primary key identity(10,1),
name_asked nvarchar(20),
email_asked varchar,
phone_asked nvarchar(10)
)

create table Skarim
(
kod_skr int primary key identity(100,1),
name_skr nvarchar(20),
kod_user int,
date_skr date,
foreign key(kod_user)references Users(kod_user),
)
create table TypeAnswers
(
kod_type int primary key identity(1,1),
name_type nvarchar(10),
)



create table Questions
(
kod_quest int primary key identity(100,1),
kod_skr int,
num_quest int,
text_quest varchar,
type_ans int,
foreign key(kod_skr)references Skarim(kod_skr),
foreign key(type_ans)references TypeAnswers(kod_type),
)

create table AnsOfQuest
(
kod_ans int primary key identity(100,1),
kod_quest int,
text_ans varchar,
foreign key(kod_quest)references Questions(kod_quest),
)

create table AnsOfAsked
(
kod_quest int,
kod_asked int,
kod_ans int,
answer varchar,
foreign key(kod_quest)references Questions(kod_quest),
foreign key(kod_asked)references Asked(kod_asked),
constraint pk_AnsOfAsked primary key(kod_quest,kod_asked),
foreign key(kod_ans)references AnsOfQuest(kod_ans),
)

