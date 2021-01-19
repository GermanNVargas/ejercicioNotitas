CREATE SCHEMA `Database` ;

CREATE TABLE `notasdh`.`notas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));