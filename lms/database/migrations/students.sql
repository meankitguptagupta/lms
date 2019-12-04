CREATE TABLE IF NOT EXISTS `students` (
    `user_id` INT(10) UNSIGNED COMMENT 'refrence: users',
    `guardian_name` VARCHAR(50) DEFAULT NULL,
    `guardian_contact_number` VARCHAR(12) DEFAULT NULL,
    `academy_name` VARCHAR(191) DEFAULT NULL,
    `academy_address` VARCHAR(191) DEFAULT NULL,
    `academy_city` VARCHAR(50) DEFAULT NULL,
    `academy_pincode` VARCHAR(8) DEFAULT NULL,
    `academy_type` VARCHAR(10) DEFAULT NULL,
    `academy_standard` SMALLINT(5) DEFAULT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'User as Student profile';