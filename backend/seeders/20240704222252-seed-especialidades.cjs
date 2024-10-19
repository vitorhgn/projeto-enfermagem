'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('especialidades', [
      {
        cod_especialidade: 1,
        especialidade: 'Enfermagem',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_especialidade: 2,
        especialidade: 'Fisioterapia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_especialidade: 3,
        especialidade: 'Estética',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_especialidade: 4,
        especialidade: 'Nutrição',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_especialidade: 5,
        especialidade: 'Odontologia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('especialidades', null, {});
  }
};
