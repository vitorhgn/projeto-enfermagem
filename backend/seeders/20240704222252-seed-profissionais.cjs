'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profissionais', [
      {
        cod_prof: 1,
        nome_prof: 'João da Silva',
        tipo_prof: 1, // Administrativo
        sup_prof: null, // Sem supervisor
        status_prof: 1, // Ativo
        cons_prof: 'CRM12345', // Conselho fictício
        senha_prof: 'senha12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_prof: 2,
        nome_prof: 'Maria Souza',
        tipo_prof: 2, // Técnico básico
        sup_prof: 1, // Supervisor João da Silva
        status_prof: 1, // Ativo
        cons_prof: 'CRM67890',
        senha_prof: 'senha67890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_prof: 3,
        nome_prof: 'Carlos Pereira',
        tipo_prof: 3, // Técnico supervisor
        sup_prof: 1, // Supervisor João da Silva
        status_prof: 2, // Inativo
        cons_prof: null, // Sem conselho
        senha_prof: 'senha54321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_prof: 4,
        nome_prof: 'Ana Fernandes',
        tipo_prof: 4, // Master
        sup_prof: null, // Sem supervisor
        status_prof: 3, // Suspenso
        cons_prof: 'CREFITO45678',
        senha_prof: 'senha09876',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('profissionais', null, {});
  }
};
