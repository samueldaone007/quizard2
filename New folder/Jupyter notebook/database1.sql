CREATE DATABASE MYDATABASE;
USE MYDATABASE;
CREATE TABLE WORKERS (
first_name varchar(50),
last_name varchar(50),
salary int,
hourly_rate decimal
);
select * from employees;
rename table workers to employees;
alter table employees #to add to a column
add state varchar (50) after hourly_rate;
alter table employees
drop state; #to remove a column

insert into employees values
('loic', 'remy', 3400, 12.3, 'abuja'),
('jese', 'cabela', 1200, 12.4, 'kogi'),
('musk', 'elon', 3444, 12.3, 'kano'),
('jeff', 'hardy', 5000, 16.3, 'kebbi');
select * from employees;
alter table employees
add age int;

update employees
set age = 13 where salary = 3400;

update employees
set age = 17 where last_name= 'elon';

update employees
set age = 16 where first_name = 'jese';

set sql_safe_updates = 0;

alter table employees
rename column state to location;


CREATE TABLE STUDENTS (
ID int,
name varchar(50),
age int,
grade varchar(50)
);
insert into students values
(1, 'aisha', 13, 'jss 2'),
(2, 'david', 14, 'jss 3'),
(3, 'esther', 12, 'jss 1'),
(4, 'john', 13, 'jss 2'),
(5, 'chinedu', 14, 'jss 3');
select * from students;
insert into students values
(6, 'faith', 15, 'jss 3');
select * from students;



rename table supermarket_sales to market;
select * from market where Gender = 'Female';
alter table market
drop `Invoice ID`;
select * from market















