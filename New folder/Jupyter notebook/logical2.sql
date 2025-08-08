select * from inventory;
delete from inventory;
set sql_safe_updates = 0;
set autocommit = 0;
commit;
select * from class;
rollback;
delete from class
where ID = 2;


