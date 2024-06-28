'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.sequelize.query(
        `CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(255) NOT NULL,
                subject VARCHAR(255) NOT NULL,
                grade CHAR(3) NOT NULL,
                marks INTEGER NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
  },
}