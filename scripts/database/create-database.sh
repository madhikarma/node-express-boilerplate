#!/bin/bash

MYSQL_DATABASE=$DATABASE_NAME
MYSQL_USER=$DATABASE_USER
MYSQL_PASSWORD=$DATABASE_PASSWORD
MYSQL_PATH="/usr/local/mysql/bin/mysql" # TODO: make this environment aware
MYSQL_ARTIST_TABLE_NAME="artists"
MYSQL_ALBUM_TABLE_NAME="albums"

echo "Deleting..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "DROP DATABASE $MYSQL_DATABASE"

echo "Creating database..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "CREATE DATABASE $MYSQL_DATABASE CHARACTER SET utf8 COLLATE utf8_general_ci";
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "SHOW DATABASES"

echo "Creating tables..."
echo "Creating artist table..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "USE $MYSQL_DATABASE; CREATE TABLE $MYSQL_ARTIST_TABLE_NAME(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL, 
  PRIMARY KEY (id)
) ENGINE = InnoDB;"

echo "Creating albums table..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "USE $MYSQL_DATABASE; CREATE TABLE $MYSQL_ALBUM_TABLE_NAME(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL, 
  artist_id int,
  FOREIGN KEY (artist_id) REFERENCES artists(id),
  PRIMARY KEY (id)
) ENGINE = InnoDB;"

echo "Inserting data..."
echo "Inserting data into artist table..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "USE $MYSQL_DATABASE; INSERT INTO $MYSQL_ARTIST_TABLE_NAME (name)
VALUES ('Bonobo');
"

echo "Inserting data into album table..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "USE $MYSQL_DATABASE; INSERT INTO $MYSQL_ALBUM_TABLE_NAME (name, artist_id)
VALUES ('Black Sands', '1');
"

echo "Finishing up..."
"$MYSQL_PATH" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -D "$MYSQL_DATABASE" -e "USE $MYSQL_DATABASE; SHOW TABLES"
