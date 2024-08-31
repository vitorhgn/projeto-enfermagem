'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pacientes', {
      cpf_pac: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11),
      },
      nome_pac: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      cod_pac: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tel_pac: {
        allowNull: false,
        type: Sequelize.STRING(11),
      },
      cep_pac: {
        type: Sequelize.STRING(8),
      },
      logra_pac: {
        type: Sequelize.STRING(100),
      },
      num_logra_pac: {
        type: Sequelize.INTEGER,
      },
      compl_pac: {
        type: Sequelize.STRING(20),
      },
      bairro_pac: {
        type: Sequelize.STRING(50),
      },
      cidade_pac: {
        type: Sequelize.STRING(50),
      },
      uf_pac: {
        type: Sequelize.STRING(2),
      },
      rg_pac: {
        type: Sequelize.STRING(12),
      },
      est_rg_pac: {
        type: Sequelize.STRING(2),
      },
      nome_mae_pac: {
        type: Sequelize.STRING(100),
      },
      data_nasc_pac: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pacientes');
  },
};
