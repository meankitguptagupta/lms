CREATE TABLE IF NOT EXISTS `user_profile` (
    `user_id` INT(10) UNSIGNED COMMENT 'refrence: users',
    `first_name` VARCHAR(50) DEFAULT NULL,
    `last_name` VARCHAR(50) DEFAULT NULL,
    `contact_number` VARCHAR(12) DEFAULT NULL,
    `address` VARCHAR(191) DEFAULT NULL,
    `city` VARCHAR(50) DEFAULT NULL,
    `pincode` VARCHAR(8) DEFAULT NULL,
    `image` VARCHAR(191) DEFAULT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'profile of users';