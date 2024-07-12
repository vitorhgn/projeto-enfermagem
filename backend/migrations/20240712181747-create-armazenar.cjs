"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("armazenar", {
      cpf_pac: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      anm_nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_idade: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      anm_sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      anm_rg: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      anm_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      anm_leito: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      anm_prof: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      anm_escolaridade: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      anm_estado_civil: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      anm_diagno_med: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_motivo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_doenca_cronica: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_trata_antes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_fator_risco: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      anm_med_uso: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_ant_familiar: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_condi_mora: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      anm_cuida_corpo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      anm_habi_banho: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      anm_ativ_fisi_traba: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_sono_repo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_exec_fisi_prog: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_rec_lazer: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_cost_comer_freq: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_elim_uri: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_elim_int: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_ciclo_menst: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_ativ_sex: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_hidratacao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_cor_muco: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_temperatura: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_pressao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_pulso: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_respiracao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_glicemia: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_dor: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_peso: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_altura: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_imc: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_estado_nutri: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_nivel_conce: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_movi: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_pele: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_cranio: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_olhos: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_ouvido: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_nariz: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_boca: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_pescoco: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_torax: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_mamas: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_auscut_pulmao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_oxi: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_coracao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_precordio: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_abdomen: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_genitu: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_membro_sup: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_membro_inf: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_med_casa: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      anm_exame_lab: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_outras_queixas: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_int_social: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      anm_reso_prob: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      anm_apoio_spiri: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
      },
      anm_sup_finan: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_conhe_prob_saude: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_cond_autocare: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_mudanca_humor: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_dado_area: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_inter_imp_entrevista: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_inter_int_fisica: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_comunica: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_resp: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_circu: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_gastro: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_genito_uri: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_asp_psico_emocional: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_int_fisica_medica: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_comunica_med: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_resp_med: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_cardio_med: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_sis_gastro_med: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_inter_sis_imuno_med: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_inter_asp_prev_promocao_saude: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      anm_inter_enfermeiro: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_enfermeiro_coren: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      anm_inter_enfermeiro_data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status_anamnese: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("armazenar");
  },
};
