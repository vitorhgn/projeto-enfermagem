"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("anamnese", [
      {
        cod_anamnese: "1643190400000-001-12345678901-001",
        anm_nome: "João Silva",
        anm_idade: 42,
        anm_sexo: "M",
        anm_rg: "123456789",
        anm_cpf: "12345678901",
        anm_leito: 1,
        anm_prof: "Engenheiro",
        anm_escolaridade: "Superior Completo",
        anm_estado_civil: "Casado",
        anm_diagno_med: "Hipertensão",
        anm_motivo: "Consulta de rotina",
        anm_doenca_cronica: "Nenhuma",
        anm_trata_antes: "Nenhum",
        anm_fator_risco: 0,
        anm_med_uso: "Nenhum",
        anm_ant_familiar: "Hipertensão",
        anm_condi_mora: "1",
        anm_cuida_corpo: "1",
        anm_habi_banho: "1",
        anm_ativ_fisi_traba: "Trabalho sedentário",
        anm_sono_repo: "8 horas por noite",
        anm_exec_fisi_prog: "Caminhada leve",
        anm_rec_lazer: "Leitura",
        anm_cost_comer_freq: "3 refeições por dia",
        anm_elim_uri: "Normal",
        anm_elim_int: "Normal",
        anm_ciclo_menst: "Não se aplica",
        anm_ativ_sex: "Ativo",
        anm_hidratacao: "Adequada",
        anm_cor_muco: "Normal",
        anm_temperatura: "36.5",
        anm_pressao: "120/80",
        anm_pulso: "70 bpm",
        anm_respiracao: "Normal",
        anm_glicemia: "Normal",
        anm_dor: "Nenhuma",
        anm_peso: "75 kg",
        anm_altura: "1.75 m",
        anm_imc: "24.5",
        anm_estado_nutri: "Adequado",
        anm_nivel_conce: "Alerta",
        anm_movi: "Normal",
        anm_pele: "Normal",
        anm_cranio: "Normal",
        anm_olhos: "Normal",
        anm_ouvido: "Normal",
        anm_nariz: "Normal",
        anm_boca: "Normal",
        anm_pescoco: "Normal",
        anm_torax: "Normal",
        anm_mamas: "Normal",
        anm_auscut_pulmao: "Normal",
        anm_oxi: "98%",
        anm_coracao: "Normal",
        anm_precordio: "Normal",
        anm_abdomen: "Normal",
        anm_genitu: "Normal",
        anm_membro_sup: "Normal",
        anm_membro_inf: "Normal",
        anm_med_casa: "Nenhum",
        anm_exame_lab: "Nenhum",
        anm_outras_queixas: "Nenhuma",
        anm_int_social: 1,
        anm_reso_prob: 1,
        anm_apoio_spiri: 1,
        anm_sup_finan: "Adequado",
        anm_conhe_prob_saude: "Adequado",
        anm_cond_autocare: "Adequado",
        anm_mudanca_humor: "Nenhuma",
        anm_dado_area: "Nenhum",
        anm_inter_imp_entrevista: "Nenhum",
        anm_inter_int_fisica: "Nenhum",
        anm_inter_comunica: "Adequado",
        anm_inter_sis_resp: "Normal",
        anm_inter_sis_circu: "Normal",
        anm_inter_sis_gastro: "Normal",
        anm_inter_sis_genito_uri: "Normal",
        anm_inter_asp_psico_emocional: "Normal",
        anm_inter_int_fisica_medica: "Nenhum",
        anm_inter_comunica_med: "Adequado",
        anm_inter_sis_resp_med: "Normal",
        anm_inter_sis_cardio_med: "Normal",
        anm_inter_sis_gastro_med: "Nenhum",
        anm_inter_sis_imuno_med: "Nenhum",
        anm_inter_asp_prev_promocao_saude: "Nenhum",
        anm_inter_enfermeiro: "João Silva",
        anm_inter_enfermeiro_coren: "123456",
        anm_inter_enfermeiro_data: new Date(),
        status_anamnese: "P",
        paciente_id: "12345678901", // Associando ao paciente João Silva
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cod_anamnese: "1744768015473-001-49675430811-001",
        anm_nome: "Ana Oliveira",
        anm_idade: 32,
        anm_sexo: "F",
        anm_rg: "987654321",
        anm_cpf: "23456789012",
        anm_leito: 2,
        anm_prof: "Médica",
        anm_escolaridade: "Pós-Graduação",
        anm_estado_civil: "Casado",
        anm_diagno_med: "Diabetes Tipo 1",
        anm_motivo: "Controle de diabetes",
        anm_doenca_cronica: "Diabetes",
        anm_trata_antes: "Insulina",
        anm_fator_risco: 1,
        anm_med_uso: "Insulina",
        anm_ant_familiar: "Diabetes",
        anm_condi_mora: "1",
        anm_cuida_corpo: "1",
        anm_habi_banho: "1",
        anm_ativ_fisi_traba: "Trabalho moderado",
        anm_sono_repo: "7 horas por noite",
        anm_exec_fisi_prog: "Corrida leve",
        anm_rec_lazer: "Leitura",
        anm_cost_comer_freq: "5 refeições por dia",
        anm_elim_uri: "Normal",
        anm_elim_int: "Normal",
        anm_ciclo_menst: "Regular",
        anm_ativ_sex: "Ativo",
        anm_hidratacao: "Adequada",
        anm_cor_muco: "Normal",
        anm_temperatura: "36.7",
        anm_pressao: "110/70",
        anm_pulso: "65 bpm",
        anm_respiracao: "Normal",
        anm_glicemia: "Controlada",
        anm_dor: "Nenhuma",
        anm_peso: "60 kg",
        anm_altura: "1.65 m",
        anm_imc: "22.0",
        anm_estado_nutri: "Adequado",
        anm_nivel_conce: "Alerta",
        anm_movi: "Normal",
        anm_pele: "Normal",
        anm_cranio: "Normal",
        anm_olhos: "Normal",
        anm_ouvido: "Normal",
        anm_nariz: "Normal",
        anm_boca: "Normal",
        anm_pescoco: "Normal",
        anm_torax: "Normal",
        anm_mamas: "Normal",
        anm_auscut_pulmao: "Normal",
        anm_oxi: "99%",
        anm_coracao: "Normal",
        anm_precordio: "Normal",
        anm_abdomen: "Normal",
        anm_genitu: "Normal",
        anm_membro_sup: "Normal",
        anm_membro_inf: "Normal",
        anm_med_casa: "Insulina",
        anm_exame_lab: "Controle de glicemia",
        anm_outras_queixas: "Nenhuma",
        anm_int_social: 1,
        anm_reso_prob: 1,
        anm_apoio_spiri: 1,
        anm_sup_finan: "Adequado",
        anm_conhe_prob_saude: "Adequado",
        anm_cond_autocare: "Adequado",
        anm_mudanca_humor: "Nenhuma",
        anm_dado_area: "Nenhum",
        anm_inter_imp_entrevista: "Nenhum",
        anm_inter_int_fisica: "Nenhum",
        anm_inter_comunica: "Adequado",
        anm_inter_sis_resp: "Normal",
        anm_inter_sis_circu: "Normal",
        anm_inter_sis_gastro: "Normal",
        anm_inter_sis_genito_uri: "Normal",
        anm_inter_asp_psico_emocional: "Normal",
        anm_inter_int_fisica_medica: "Nenhum",
        anm_inter_comunica_med: "Adequado",
        anm_inter_sis_resp_med: "Normal",
        anm_inter_sis_cardio_med: "Normal",
        anm_inter_sis_gastro_med: "Nenhum",
        anm_inter_sis_imuno_med: "Nenhum",
        anm_inter_asp_prev_promocao_saude: "Nenhum",
        anm_inter_enfermeiro: "Ana Oliveira",
        anm_inter_enfermeiro_coren: "654321",
        anm_inter_enfermeiro_data: new Date(),
        status_anamnese: "P",
        paciente_id: "23456789012", // Associando ao paciente Ana Oliveira
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("anamnese", null, {});
  },
};
