use second;

create table inventory(
id int primary key,
product_name varchar(20),
quantity int,
product_type varchar(20),
prize int
);
select * from inventory;
insert into inventory values 
(1000, 'laptop', 4, 'gadgets', 50000  );
insert into inventory values 
(1001, 'phone', 2, 'gadgets', 50000  );
insert into inventory values 
(1002, 'rice', 2, 'food', 8000  );
insert into inventory values 
(1003, 'sneakers', 6, 'footwear', 4000  );
select * from inventory
where product_type = 'gadgets';
select product_name, product_type from inventory where product_type = 'gadgets';
select * from inventory
where product_type = 'gadgets' or product_type = 'footwear';
select * from inventory;


select * from inventory
where product_type = 'gadgets' and quantity > 3



