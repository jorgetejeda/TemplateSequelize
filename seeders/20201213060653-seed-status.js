"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("statuses", [
      {
        name: "Activo",
        description: "Disponible para su uso",
      },
      {
        name: "Pendiente",
        description: "A la espera de una aprobación",
      },
      {
        name: "Cancelado",
        description: "No esta disponible",
      },
      {
        name: "Suspendido",
        description: "No esta disponible por un tiempo determinado",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('statuses', null, {});
  },
};
