'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pacientes', [
      {
        cpf_pac: '12345678901',
        nome_pac: 'João Silva',
        cod_pac: 1,
        tel_pac: '11987654321',
        cep_pac: '01001000',
        logra_pac: 'Rua da Paz',
        num_logra_pac: 123,
        compl_pac: 'Apt 101',
        bairro_pac: 'Centro',
        cidade_pac: 'São Paulo',
        uf_pac: 'SP',
        rg_pac: '123456789',
        est_rg_pac: 'SP',
        nome_mae_pac: 'Maria Silva',
        data_nasc_pac: '1980-05-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cpf_pac: '23456789012',
        nome_pac: 'Ana Oliveira',
        cod_pac: 2,
        tel_pac: '11987654322',
        cep_pac: '02020020',
        logra_pac: 'Avenida Paulista',
        num_logra_pac: 1500,
        compl_pac: 'Apt 302',
        bairro_pac: 'Bela Vista',
        cidade_pac: 'São Paulo',
        uf_pac: 'SP',
        rg_pac: '987654321',
        est_rg_pac: 'SP',
        nome_mae_pac: 'Josefina Oliveira',
        data_nasc_pac: '1990-07-22',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cpf_pac: '34567890123',
        nome_pac: 'Carlos Souza',
        cod_pac: 3,
        tel_pac: '11987654323',
        cep_pac: '03030303',
        logra_pac: 'Rua do Carmo',
        num_logra_pac: 789,
        compl_pac: 'Casa',
        bairro_pac: 'Vila Mariana',
        cidade_pac: 'São Paulo',
        uf_pac: 'SP',
        rg_pac: '234567891',
        est_rg_pac: 'SP',
        nome_mae_pac: 'Clara Souza',
        data_nasc_pac: '1985-03-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pacientes', null, {});
  },
};
