import sequelize from "../database/index.js";
import { DataTypes } from "@sequelize/core";
import Paciente from "./Pacientes.js";

const Anamnese = sequelize.define(
  "Anamnese",
  {
    cod_anamnese: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
    },
    anm_nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_sexo: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    anm_rg: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    anm_cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    anm_leito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_prof: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    anm_escolaridade: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    anm_estado_civil: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    anm_diagno_med: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_motivo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_doenca_cronica: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_trata_antes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_fator_risco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_med_uso: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_ant_familiar: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_condi_mora: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    anm_cuida_corpo: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    anm_habi_banho: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    anm_ativ_fisi_traba: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_sono_repo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_exec_fisi_prog: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_rec_lazer: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_cost_comer_freq: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_elim_uri: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_elim_int: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_ciclo_menst: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_ativ_sex: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_hidratacao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_cor_muco: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_temperatura: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_pressao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_pulso: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_respiracao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_glicemia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_dor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_peso: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_altura: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_imc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_estado_nutri: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_nivel_conce: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_movi: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_pele: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_cranio: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_olhos: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_ouvido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_nariz: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_boca: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_pescoco: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_torax: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_mamas: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_auscut_pulmao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_oxi: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_coracao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_precordio: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_abdomen: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_genitu: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_membro_sup: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_membro_inf: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_med_casa: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    anm_exame_lab: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_outras_queixas: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_int_social: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_reso_prob: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_apoio_spiri: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    anm_sup_finan: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_conhe_prob_saude: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_cond_autocare: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_mudanca_humor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_dado_area: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_inter_imp_entrevista: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_inter_int_fisica: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_comunica: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_resp: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_circu: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_gastro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_genito_uri: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_asp_psico_emocional: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_int_fisica_medica: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_comunica_med: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_resp_med: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_cardio_med: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_sis_gastro_med: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_inter_sis_imuno_med: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_inter_asp_prev_promocao_saude: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anm_inter_enfermeiro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_enfermeiro_coren: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    anm_inter_enfermeiro_data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_anamnese: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Paciente,
        key: "cpf_pac",
      },
    },
  },
  {
    tableName: "anamnese",
    timestamps: true,
  }
);

Paciente.hasMany(Anamnese, { foreignKey: "paciente_id", as: "anamneses" });
Anamnese.belongsTo(Paciente, { foreignKey: "paciente_id", as: "paciente" });

export default Anamnese;
