CREATE DATABASE rugby_api;

USE rugby_api;

create table plaquage_ok (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_plaquage_ok int
);
create table plaquage_ko (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_plaquage_ko int
);
create table melee_ok (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_melee_ok int
);
create table melee_ko (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_melee_ko int
);
create table touche_ok (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_touche_ok int
);
create table touche_ko (
    Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sum_touche_ko int
)


