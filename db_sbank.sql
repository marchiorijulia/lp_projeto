create database db_sbank;
use db_sbank;

create table newsletter(
	id int auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) unique not null
);

select * from newsletter