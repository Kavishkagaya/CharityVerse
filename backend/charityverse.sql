CREATE DATABASE charityverse_db;

USE charityverse_db;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('charity_org', 'donor', 'receiver') NOT NULL,
  verification_status ENUM('pending', 'verified') DEFAULT 'pending'
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category ENUM('healthcare', 'education', 'disaster_management') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
