-- CreateTable
CREATE TABLE `projectDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `caption` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `state_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
