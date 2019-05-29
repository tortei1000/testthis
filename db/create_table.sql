create table users (
id serial primary key,
username varchar(50),
password varchar
);
create table recipes (
id serial primary key,
user_id int references users(id),
title VARCHAR(50),
instructions varchar(50)
);
