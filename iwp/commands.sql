CREATE DATABASE iwplab

USE iwplab

CREATE table customerISP ( 
    name varchar(255), 
    email varchar(255), 
    mobile varchar(10), 
    plan varchar(255),
    address varchar(255), 
    doubts varchar(255) );

DESC customerISP;

mysql> DESC customerISP;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| name    | varchar(255) | YES  |     | NULL    |       |
| email   | varchar(255) | YES  |     | NULL    |       |
| mobile  | varchar(10)  | YES  |     | NULL    |       |
| plan    | varchar(255) | YES  |     | NULL    |       |
| address | varchar(255) | YES  |     | NULL    |       |
| doubts  | varchar(255) | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
6 rows in set (0.01 sec)
