DROP DATABASE IF EXISTS `pos`;
CREATE SCHEMA `pos`;
USE `pos`;
CREATE TABLE `tables` (
    `tables_id` INT UNSIGNED NOT NULL,
    `number` TINYINT UNSIGNED,
    `location` VARCHAR(20),
    `capacity` TINYINT UNSIGNED,
    `status` BOOLEAN,
    `reserved` BOOLEAN,
    PRIMARY KEY (`tables_id`)
);
CREATE TABLE `customer` (
    `customer_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(50),
    `phone` VARCHAR(20),
    `email` VARCHAR(50),
    `address` VARCHAR(100),
    PRIMARY KEY (`customer_id`)
);
CREATE TABLE `staff` (
    `staff_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(50),
    `phone` VARCHAR(20),
    `email` VARCHAR(50),
    `position` VARCHAR(50),
    `status` BOOLEAN,
    PRIMARY KEY (`staff_id`)
);
CREATE TABLE `reservation` (
    `reservation_id` INT UNSIGNED NOT NULL,
    `customer_id` INT UNSIGNED,
    `tables_id` INT UNSIGNED,
    `created` DATETIME,
    `expected` DATETIME,
    `arrival` DATETIME,
    `status` BOOLEAN,
    PRIMARY KEY (`reservation_id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`),
    FOREIGN KEY (`tables_id`) REFERENCES `tables`(`tables_id`)
);
CREATE TABLE `menu` (
    `menu_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(50),
    `description` VARCHAR(255),
    `unit` VARCHAR(10),
    `price` DECIMAL(10, 2),
    PRIMARY KEY (`menu_id`)
);
CREATE TABLE `inventory` (
    `inventory_id` INT UNSIGNED NOT NULL,
    `menu_id` INT UNSIGNED,
    `available` BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (`inventory_id`),
    FOREIGN KEY (`menu_id`) REFERENCES `menu`(`menu_id`)
);
CREATE TABLE `category` (
    `category_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(50),
    `description` VARCHAR(255),
    `isTopping` BOOLEAN DEFAULT FALSE,
    `age_restricted` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (`category_id`)
);
CREATE TABLE `menu_category` (
    `menu_id` INT UNSIGNED,
    `category_id` INT UNSIGNED,
    FOREIGN KEY (`menu_id`) REFERENCES `menu`(`menu_id`),
    FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`),
    PRIMARY KEY (`menu_id`, `category_id`)
);
CREATE TABLE `receipt` (
    `receipt_id` INT UNSIGNED NOT NULL,
    `datetime` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `total` DECIMAL(10, 2),
    `vat` DECIMAL(10, 2),
    `net` DECIMAL(10, 2),
    `payment_method` VARCHAR(50),
    `isPaid` BOOLEAN DEFAULT FALSE,
    `isValid` BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (`receipt_id`)
);
CREATE TABLE `orders` (
    `order_id` INT UNSIGNED NOT NULL,
    `receipt_id` INT UNSIGNED,
    `menu_id` INT UNSIGNED,
    `tables_id` INT UNSIGNED,
    `customer_id` INT UNSIGNED,
    `created` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `served` DATETIME,
    `isTakeAway` BOOLEAN DEFAULT FALSE,
    `isValid` BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (`order_id`),
    FOREIGN KEY (`receipt_id`) REFERENCES `receipt`(`receipt_id`)
);
SELECT *
FROM `information_schema`.`columns`
WHERE `table_schema` = 'pos';