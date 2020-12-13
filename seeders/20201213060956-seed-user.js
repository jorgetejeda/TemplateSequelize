"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        email: "test@hotmail.com",
        password: "test",
        idStatus: 1,
        createdAt: new Date()
      },
      {
        email: "test1@hotmail.com",
        password: "test",
        idStatus: 2,
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
