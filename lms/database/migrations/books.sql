CREATE TABLE IF NOT EXISTS `books` (
    `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
    `tag_id` VARCHAR(10) DEFAULT NULL COMMENT 'custom id of the book',
    `title` VARCHAR(50) DEFAULT NULL COMMENT 'name of the book',
    `genere` VARCHAR(50) DEFAULT NULL COMMENT 'genere of the book like History, Novel, etc.',
    `is_premium` TINYINT(1) DEFAULT NULL,
    `academy_type` VARCHAR(50) DEFAULT NULL,
    `academy_standard` SMALLINT(5) DEFAULT NULL,
    `fields` TEXT DEFAULT NULL COMMENT 'Other information of the book',
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'List of books';