'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profissionais', {
      cod_prof: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_prof', 
      },
      nome_prof: {
        allowNull: false,
        type: Sequelize.STRING(100), 
        field: 'nome_prof',
      },
      tipo_prof: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'tipo_prof',
        validate: {
          isIn: [[1, 2, 3, 4]], // Valores permitidos: 1 (administrativo), 2 (técnico básico), 3 (técnico supervisor), 4 (master)
        },
      },
      sup_prof: {
        allowNull: true, 
        type: Sequelize.INTEGER, // Código do supervisor (relacionamento com outro profissional)
        field: 'sup_prof',
      },
      status_prof: {
        allowNull: false,
        type: Sequelize.INTEGER, // Situação do profissional
        field: 'status_prof',
        validate: {
          isIn: [[1, 2, 3]], // Valores permitidos: 1 (ativo), 2 (inativo), 3 (suspenso)
        },
      },
      cons_prof: {
        allowNull: true, // Conselho do profissional (pode ser nulo)
        type: Sequelize.STRING(10), // Máximo de 10 caracteres
        field: 'cons_prof',
      },
      senha_prof: {
        allowNull: false, // Senha para autenticação (não pode ser nula)
        type: Sequelize.STRING(70), // Máximo de 70 caracteres
        field: 'senha_prof',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profissionais');
  },
};
