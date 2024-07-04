import Anamnese from "../../models/Anamnese.js";
import * as yup from "yup";

async function CreateOrUpdate(data) {
  try {
    const anamneseSchema = yup.object().shape({
      cpf_pac: yup.string().length(11).required(),
      anm_nome: yup.string().max(100).required(),
      anm_idade: yup.number().integer().max(999).required(),
      anm_sexo: yup.string().length(1).required(),
      anm_rg: yup.string().max(9).required(),
      anm_cpf: yup.string().length(11).required(),
      anm_leito: yup.number().integer().max(9).required(),
      anm_prof: yup.string().max(60).required(),
      anm_escolaridade: yup.string().max(60).required(),
      anm_estado_civil: yup.string().max(20).required(),
      anm_diagno_med: yup.string().max(100).required(),
      anm_motivo: yup.string().max(2000).required(),
      anm_doenca_cronica: yup.string().max(2000).required(),
      anm_trata_antes: yup.string().max(2000).required(),
      anm_fator_risco: yup.number().integer().max(9).required(),
      anm_med_uso: yup.string().max(2000).required(),
      anm_ant_familiar: yup.string().max(100).required(),
      anm_condi_mora: yup.string().length(1).required(),
      anm_cuida_corpo: yup.string().length(1).required(),
      anm_habi_banho: yup.string().length(1).required(),
      anm_ativ_fisi_traba: yup.string().max(100).required(),
      anm_sono_repo: yup.string().max(100).required(),
      anm_exec_fisi_prog: yup.string().max(100).required(),
      anm_rec_lazer: yup.string().max(100).required(),
      anm_cost_comer_freq: yup.string().max(100).required(),
      anm_elim_uri: yup.string().max(100).required(),
      anm_elim_int: yup.string().max(100).required(),
      anm_ciclo_menst: yup.string().max(100).required(),
      anm_ativ_sex: yup.string().max(100).required(),
      anm_hidratacao: yup.string().max(100).required(),
      anm_cor_muco: yup.string().max(100).required(),
      anm_temperatura: yup.string().max(100).required(),
      anm_pressao: yup.string().max(100).required(),
      anm_pulso: yup.string().max(100).required(),
      anm_respiracao: yup.string().max(100).required(),
      anm_glicemia: yup.string().max(100).required(),
      anm_dor: yup.string().max(100).required(),
      anm_peso: yup.string().max(100).required(),
      anm_altura: yup.string().max(100).required(),
      anm_imc: yup.string().max(100).required(),
      anm_estado_nutri: yup.string().max(100).required(),
      anm_nivel_conce: yup.string().max(100).required(),
      anm_movi: yup.string().max(100).required(),
      anm_pele: yup.string().max(100).required(),
      anm_cranio: yup.string().max(100).required(),
      anm_olhos: yup.string().max(100).required(),
      anm_ouvido: yup.string().max(100).required(),
      anm_nariz: yup.string().max(100).required(),
      anm_boca: yup.string().max(100).required(),
      anm_pescoco: yup.string().max(100).required(),
      anm_torax: yup.string().max(100).required(),
      anm_mamas: yup.string().max(100).required(),
      anm_auscut_pulmao: yup.string().max(100).required(),
      anm_oxi: yup.string().max(100).required(),
      anm_coracao: yup.string().max(100).required(),
      anm_precordio: yup.string().max(100).required(),
      anm_abdomen: yup.string().max(100).required(),
      anm_genitu: yup.string().max(100).required(),
      anm_membro_sup: yup.string().max(100).required(),
      anm_membro_inf: yup.string().max(100).required(),
      anm_med_casa: yup.string().max(200).required(),
      anm_exame_lab: yup.string().max(2000).required(),
      anm_outras_queixas: yup.string().max(2000).required(),
      anm_int_social: yup.number().integer().max(9).required(),
      anm_reso_prob: yup.number().integer().max(9).required(),
      anm_apoio_spiri: yup.number().integer().max(9).required(),
      anm_sup_finan: yup.string().max(100).required(),
      anm_conhe_prob_saude: yup.string().max(100).required(),
      anm_cond_autocare: yup.string().max(100).required(),
      anm_mudanca_humor: yup.string().max(100).required(),
      anm_dado_area: yup.string().max(2000).required(),
      anm_inter_imp_entrevista: yup.string().max(2000).required(),
      anm_inter_int_fisica: yup.string().max(100).required(),
      anm_inter_comunica: yup.string().max(100).required(),
      anm_inter_sis_resp: yup.string().max(100).required(),
      anm_inter_sis_circu: yup.string().max(100).required(),
      anm_inter_sis_gastro: yup.string().max(100).required(),
      anm_inter_sis_genito_uri: yup.string().max(100).required(),
      anm_inter_asp_psico_emocional: yup.string().max(100).required(),
      anm_inter_int_fisica_medica: yup.string().max(100).required(),
      anm_inter_comunica_med: yup.string().max(100).required(),
      anm_inter_sis_resp_med: yup.string().max(100).required(),
      anm_inter_sis_cardio_med: yup.string().max(100).required(),
      anm_inter_sis_gastro_med: yup.string().max(2000).required(),
      anm_inter_sis_imuno_med: yup.string().max(2000).required(),
      anm_inter_asp_prev_promocao_saude: yup.string().max(2000).required(),
      anm_inter_enfermeiro: yup.string().max(100).required(),
      anm_inter_enfermeiro_coren: yup.string().max(100).required(),
      anm_inter_enfermeiro_data: yup.date().required(),
    });

    await anamneseSchema.validate(data, { abortEarly: false });

    const anamneseExists = await Anamnese.findByPk(data.cpf_pac);

    if (anamneseExists) {
      const anamnese = await Anamnese.update(
        { ...data, status_anamnese: "P" },
        {
          where: { cpf_pac: data.cpf_pac },
        }
      );
      return anamnese;
    } else {
      const anamnese = await Anamnese.create({ ...data, status_anamnese: "P" });
      return anamnese;
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log({ errors: error.errors });
      throw new Error("Validation error");
    }
    console.error(error);
    throw new Error("Erro ao criar anamnese do paciente");
  }
}

export default CreateOrUpdate;
