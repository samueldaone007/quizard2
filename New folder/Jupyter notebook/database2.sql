create database second;
use second;
create table class(
ID int,
Product varchar (20),
Quantity int,
Price_per_unit int,
Total_prize int
);

select * from class;
alter table class
rename column Price_per_unit to Unit_prize;
alter table class
add discount int;
insert into class values
(2, 'sneakers',1, 3, 4, null);
insert into class values
(2, 'jean',2, 5, 7, null);
insert into class values
(2, 'wig',3, 7, 4, null);
select * from class;
update class
set Total_priCe = Unit_prize*Quantity;
update class
set discount = 2 where id = 2;
update class
set ID = 2 where UNIT_PRIZE = 5;
update class
set ID = 3 where UNIT_PRIZE = 7;
update class
set ID = 1 where UNIT_PRIZE = 3