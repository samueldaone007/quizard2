create table new (
id int primary key auto_increment,
product varchar(20),
prize int
);

select * from new;
insert into new (product, prize) values
('shoe', 23);
insert into new (product, prize) values
('candy', 203);
insert into new (product, prize) values
('burger', 20);
insert into new (product, prize) values
('cheese', 50);
insert into new (product, prize) values
('sandal', 50);
alter table new 
add column category varchar(20);
update new
set category = 'footwear' where id = 1;
update new
set category = 'sweet' where id = 2;
update new
set category = 'junks' where id = 3;
update new
set category = 'junks' where id = 4;
update new
set category = 'footwear' where id = 5;
select count(category) from new;
select max(prize) from new;
select min(prize) from new
where category = 'junks';
select avg(prize) from new;
select category, avg(prize) from new group by category;
select * from new;





