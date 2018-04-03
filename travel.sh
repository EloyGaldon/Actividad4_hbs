#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y mysql-server php-mysql
debconf-set-selections <<< "mysql-server mysql-server/root_password password mysql"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password mysql"
sudo apt-get -y install nodejs
sudo apt-get -y install nodejs-legacy
sudo apt-get -y install npm
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs

echo 'CREATE DATABASE IF NOT EXISTS actividad3 CHARACTER SET Latin1 COLLATE latin1_spanish_ci;'> basededatos.sql
echo 'USE Actividad3;' >> basededatos.sql
echo 'CREATE TABLE usuarios (id INT NOT NULL AUTO_INCREMENT,usuario VARCHAR(45) NOT NULL,email VARCHAR(45) NOT NULL,password VARCHAR(80) NOT NULL,hash VARCHAR(80) NULL,PRIMARY KEY (id));' >> basededatos.sql
cat basededatos.sql

sudo mysql -u root < basededatos.sql