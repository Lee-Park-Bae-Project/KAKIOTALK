CREATE USER 'user_1'@'%' IDENTIFIED BY 'password1';
CREATE USER 'user_2'@'%' IDENTIFIED BY 'password2';
CREATE USER 'user_3'@'%' IDENTIFIED BY 'password3';

CREATE DATABASE dev_1 default CHARACTER SET UTF8;
CREATE DATABASE dev_2 default CHARACTER SET UTF8;
CREATE DATABASE dev_3 default CHARACTER SET UTF8;
CREATE DATABASE test_1 default CHARACTER SET UTF8;
CREATE DATABASE test_2 default CHARACTER SET UTF8;
CREATE DATABASE test_3 default CHARACTER SET UTF8;

GRANT ALL PRIVILEGES ON dev_1.* TO 'user_1'@'%';
GRANT ALL PRIVILEGES ON dev_2.* TO 'user_2'@'%';
GRANT ALL PRIVILEGES ON dev_3.* TO 'user_3'@'%';
GRANT ALL PRIVILEGES ON test_1.* TO 'user_1'@'%';
GRANT ALL PRIVILEGES ON test_2.* TO 'user_2'@'%';
GRANT ALL PRIVILEGES ON test_3.* TO 'user_3'@'%';

FLUSH PRIVILEGES;