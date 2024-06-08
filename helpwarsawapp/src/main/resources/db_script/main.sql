-- Database Name:
CREATE DATABASE db_help_warsaw_app;

USE db_help_warsaw_app;

CREATE USER 'Dorota'@'localhost' IDENTIFIED BY 'Dorota1234.';
GRANT ALL PRIVILEGES ON db_help_warsaw_app.* TO 'Dorota'@'localhost';
FLUSH PRIVILEGES;

-- CREATE COORDINATOR TABLE STRUCTURE
CREATE TABLE coordinators(
    coordinator_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY(coordinator_id)
);
