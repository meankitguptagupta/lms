CREATE TABLE IF NOT EXISTS `register` (
    `book_id` INT(10) UNSIGNED COMMENT 'refrence:books',
    `user_id` INT(10) UNSIGNED COMMENT 'refrence:users',
    `proposed_return_date` DATE DEFAULT NULL,
    `return_date` TIMESTAMP NULL DEFAULT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB COMMENT 'List of books';