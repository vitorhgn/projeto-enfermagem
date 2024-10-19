import * as yup from "yup";

const validationSchema = yup.object().shape({
  cod_anamnese: yup.string().max(255, "O codigo esta incorreto").optional(),
  anm_nome: yup
    .string()
    .max(100, "O nome deve ter no máximo 100 caracteres")
    .required("O campo Nome é obrigatório"),
  anm_idade: yup
    .number()
    .integer("A idade deve ser um número inteiro")
    .max(999, "A idade deve ser no máximo 999")
    .required("O campo Idade é obrigatório"),
  anm_sexo: yup
    .string()
    .length(1, "O sexo deve ter exatamente 1 caractere")
    .required("O campo Sexo é obrigatório"),
  anm_rg: yup
    .string()
    .max(9, "O RG deve ter no máximo 9 caracteres")
    .required("O campo RG é obrigatório"),
  anm_cpf: yup
    .string()
    .length(11, "O CPF deve ter exatamente 11 caracteres")
    .required("O campo CPF é obrigatório"),
  anm_leito: yup
    .number()
    .integer("O leito deve ser um número inteiro")
    .max(9, "O leito deve ser no máximo 9")
    .required("O campo Leito é obrigatório"),
  anm_prof: yup
    .string()
    .max(60, "A profissão deve ter no máximo 60 caracteres")
    .required("O campo Profissão é obrigatório"),
  anm_escolaridade: yup
    .string()
    .max(60, "A escolaridade deve ter no máximo 60 caracteres")
    .required("O campo Escolaridade é obrigatório"),
  anm_estado_civil: yup
    .string()
    .max(20, "O estado civil deve ter no máximo 20 caracteres")
    .required("O campo Estado Civil é obrigatório"),
  anm_diagno_med: yup
    .string()
    .max(100, "O diagnóstico médico deve ter no máximo 100 caracteres")
    .required("O campo Diagnóstico Médico é obrigatório"),
  anm_motivo: yup
    .string()
    .max(2000, "O motivo deve ter no máximo 2000 caracteres")
    .required("O campo Motivo é obrigatório"),
  anm_doenca_cronica: yup
    .string()
    .max(2000, "A doença crônica deve ter no máximo 2000 caracteres")
    .required("O campo Doença Crônica é obrigatório"),
  anm_trata_antes: yup
    .string()
    .max(2000, "O tratamento anterior deve ter no máximo 2000 caracteres")
    .required("O campo Tratamento Anterior é obrigatório"),
  anm_fator_risco: yup
    .number()
    .integer("O fator de risco deve ser um número inteiro")
    .max(9, "O fator de risco deve ser no máximo 9")
    .required("O campo Fator de Risco é obrigatório"),
  anm_med_uso: yup
    .string()
    .max(2000, "Os medicamentos em uso devem ter no máximo 2000 caracteres")
    .required("O campo Medicamentos em Uso é obrigatório"),
  anm_ant_familiar: yup
    .string()
    .max(100, "Os antecedentes familiares devem ter no máximo 100 caracteres")
    .required("O campo Antecedentes Familiares é obrigatório"),
  anm_condi_mora: yup
    .string()
    .length(1, "A condição de moradia deve ter exatamente 1 caractere")
    .required("O campo Condição de Moradia é obrigatório"),
  anm_cuida_corpo: yup
    .string()
    .length(1, "O cuidado com o corpo deve ter exatamente 1 caractere")
    .required("O campo Cuidados com o Corpo é obrigatório"),
  anm_habi_banho: yup
    .string()
    .length(1, "O hábito de banho deve ter exatamente 1 caractere")
    .required("O campo Hábitos de Banho é obrigatório"),
  anm_ativ_fisi_traba: yup
    .string()
    .max(100, "A atividade física e trabalho deve ter no máximo 100 caracteres")
    .required("O campo Atividade Física e Trabalho é obrigatório"),
  anm_sono_repo: yup
    .string()
    .max(100, "O sono e repouso deve ter no máximo 100 caracteres")
    .required("O campo Sono e Repouso é obrigatório"),
  anm_exec_fisi_prog: yup
    .string()
    .max(100, "O exercício físico programado deve ter no máximo 100 caracteres")
    .required("O campo Exercício Físico Programado é obrigatório"),
  anm_rec_lazer: yup
    .string()
    .max(100, "A recreação e lazer deve ter no máximo 100 caracteres")
    .required("O campo Recreação e Lazer é obrigatório"),
  anm_cost_comer_freq: yup
    .string()
    .max(
      100,
      "O costume alimentar e frequência deve ter no máximo 100 caracteres"
    )
    .required("O campo Costume Alimentar e Frequência é obrigatório"),
  anm_elim_uri: yup
    .string()
    .max(100, "A eliminação urinária deve ter no máximo 100 caracteres")
    .required("O campo Eliminação Urinária é obrigatório"),
  anm_elim_int: yup
    .string()
    .max(100, "A eliminação intestinal deve ter no máximo 100 caracteres")
    .required("O campo Eliminação Intestinal é obrigatório"),
  anm_ciclo_menst: yup
    .string()
    .max(100, "O ciclo menstrual deve ter no máximo 100 caracteres")
    .required("O campo Ciclo Menstrual é obrigatório"),
  anm_ativ_sex: yup
    .string()
    .max(100, "A atividade sexual deve ter no máximo 100 caracteres")
    .required("O campo Atividade Sexual é obrigatório"),
  anm_hidratacao: yup
    .string()
    .max(100, "A hidratação deve ter no máximo 100 caracteres")
    .required("O campo Hidratação é obrigatório"),
  anm_cor_muco: yup
    .string()
    .max(100, "A cor do muco deve ter no máximo 100 caracteres")
    .required("O campo Cor do Muco é obrigatório"),
  anm_temperatura: yup
    .string()
    .max(100, "A temperatura deve ter no máximo 100 caracteres")
    .required("O campo Temperatura é obrigatório"),
  anm_pressao: yup
    .string()
    .max(100, "A pressão deve ter no máximo 100 caracteres")
    .required("O campo Pressão é obrigatório"),
  anm_pulso: yup
    .string()
    .max(100, "O pulso deve ter no máximo 100 caracteres")
    .required("O campo Pulso é obrigatório"),
  anm_respiracao: yup
    .string()
    .max(100, "A respiração deve ter no máximo 100 caracteres")
    .required("O campo Respiração é obrigatório"),
  anm_glicemia: yup
    .string()
    .max(100, "A glicemia deve ter no máximo 100 caracteres")
    .required("O campo Glicemia é obrigatório"),
  anm_dor: yup
    .string()
    .max(100, "A dor deve ter no máximo 100 caracteres")
    .required("O campo Dor é obrigatório"),
  anm_peso: yup
    .string()
    .max(100, "O peso deve ter no máximo 100 caracteres")
    .required("O campo Peso é obrigatório"),
  anm_altura: yup
    .string()
    .max(100, "A altura deve ter no máximo 100 caracteres")
    .required("O campo Altura é obrigatório"),
  anm_imc: yup
    .string()
    .max(100, "O IMC deve ter no máximo 100 caracteres")
    .required("O campo IMC é obrigatório"),
  anm_estado_nutri: yup
    .string()
    .max(100, "O estado nutricional deve ter no máximo 100 caracteres")
    .required("O campo Estado Nutricional é obrigatório"),
  anm_nivel_conce: yup
    .string()
    .max(100, "O nível de consciência deve ter no máximo 100 caracteres")
    .required("O campo Nível de Consciência é obrigatório"),
  anm_movi: yup
    .string()
    .max(100, "A movimentação deve ter no máximo 100 caracteres")
    .required("O campo Movimentação é obrigatório"),
  anm_pele: yup
    .string()
    .max(100, "A pele deve ter no máximo 100 caracteres")
    .required("O campo Pele é obrigatório"),
  anm_cranio: yup
    .string()
    .max(100, "O crânio deve ter no máximo 100 caracteres")
    .required("O campo Crânio é obrigatório"),
  anm_olhos: yup
    .string()
    .max(100, "Os olhos devem ter no máximo 100 caracteres")
    .required("O campo Olhos é obrigatório"),
  anm_ouvido: yup
    .string()
    .max(100, "Os ouvidos devem ter no máximo 100 caracteres")
    .required("O campo Ouvido é obrigatório"),
  anm_nariz: yup
    .string()
    .max(100, "O nariz deve ter no máximo 100 caracteres")
    .required("O campo Nariz é obrigatório"),
  anm_boca: yup
    .string()
    .max(100, "A boca deve ter no máximo 100 caracteres")
    .required("O campo Boca é obrigatório"),
  anm_pescoco: yup
    .string()
    .max(100, "O pescoço deve ter no máximo 100 caracteres")
    .required("O campo Pescoço é obrigatório"),
  anm_torax: yup
    .string()
    .max(100, "O tórax deve ter no máximo 100 caracteres")
    .required("O campo Tórax é obrigatório"),
  anm_mamas: yup
    .string()
    .max(100, "As mamas devem ter no máximo 100 caracteres")
    .required("O campo Mamas é obrigatório"),
  anm_auscut_pulmao: yup
    .string()
    .max(100, "A ausculta pulmonar deve ter no máximo 100 caracteres")
    .required("O campo Ausculta Pulmonar é obrigatório"),
  anm_oxi: yup
    .string()
    .max(100, "A oxigenação deve ter no máximo 100 caracteres")
    .required("O campo Oxigenação é obrigatório"),
  anm_coracao: yup
    .string()
    .max(100, "O coração deve ter no máximo 100 caracteres")
    .required("O campo Coração é obrigatório"),
  anm_precordio: yup
    .string()
    .max(100, "O pré-córdio deve ter no máximo 100 caracteres")
    .required("O campo Pré-Córdio é obrigatório"),
  anm_abdomen: yup
    .string()
    .max(100, "O abdômen deve ter no máximo 100 caracteres")
    .required("O campo Abdômen é obrigatório"),
  anm_genitu: yup
    .string()
    .max(100, "A genitália deve ter no máximo 100 caracteres")
    .required("O campo Genitália é obrigatório"),
  anm_membro_sup: yup
    .string()
    .max(100, "Os membros superiores devem ter no máximo 100 caracteres")
    .required("O campo Membros Superiores é obrigatório"),
  anm_membro_inf: yup
    .string()
    .max(100, "Os membros inferiores devem ter no máximo 100 caracteres")
    .required("O campo Membros Inferiores é obrigatório"),
  anm_med_casa: yup
    .string()
    .max(200, "Os medicamentos em casa devem ter no máximo 200 caracteres")
    .required("O campo Medicamentos em Casa é obrigatório"),
  anm_exame_lab: yup
    .string()
    .max(2000, "Os exames laboratoriais devem ter no máximo 2000 caracteres")
    .required("O campo Exames Laboratoriais é obrigatório"),
  anm_outras_queixas: yup
    .string()
    .max(2000, "As outras queixas devem ter no máximo 2000 caracteres")
    .required("O campo Outras Queixas é obrigatório"),
  anm_int_social: yup
    .number()
    .integer("A interação social deve ser um número inteiro")
    .max(9, "A interação social deve ser no máximo 9")
    .required("O campo Interação Social é obrigatório"),
  anm_reso_prob: yup
    .number()
    .integer("A resolução de problemas deve ser um número inteiro")
    .max(9, "A resolução de problemas deve ser no máximo 9")
    .required("O campo Resolução de Problemas é obrigatório"),
  anm_apoio_spiri: yup
    .number()
    .integer("O apoio espiritual deve ser um número inteiro")
    .max(9, "O apoio espiritual deve ser no máximo 9")
    .required("O campo Apoio Espiritual é obrigatório"),
  anm_sup_finan: yup
    .string()
    .max(100, "O suporte financeiro deve ter no máximo 100 caracteres")
    .required("O campo Suporte Financeiro é obrigatório"),
  anm_conhe_prob_saude: yup
    .string()
    .max(
      100,
      "O conhecimento sobre problemas de saúde deve ter no máximo 100 caracteres"
    )
    .required("O campo Conhecimento sobre Problemas de Saúde é obrigatório"),
  anm_cond_autocare: yup
    .string()
    .max(100, "A condição de autocuidado deve ter no máximo 100 caracteres")
    .required("O campo Condição de Autocuidado é obrigatório"),
  anm_mudanca_humor: yup
    .string()
    .max(100, "A mudança de humor deve ter no máximo 100 caracteres")
    .required("O campo Mudança de Humor é obrigatório"),
  anm_dado_area: yup
    .string()
    .max(2000, "Os dados da área devem ter no máximo 2000 caracteres")
    .required("O campo Dados da Área é obrigatório"),
  anm_inter_imp_entrevista: yup
    .string()
    .max(2000, "A impressão da entrevista deve ter no máximo 2000 caracteres")
    .required("O campo Impressão da Entrevista é obrigatório"),
  anm_inter_int_fisica: yup
    .string()
    .max(100, "A intervenção física deve ter no máximo 100 caracteres")
    .required("O campo Intervenção Física é obrigatório"),
  anm_inter_comunica: yup
    .string()
    .max(100, "A comunicação deve ter no máximo 100 caracteres")
    .required("O campo Comunicação é obrigatório"),
  anm_inter_sis_resp: yup
    .string()
    .max(100, "O sistema respiratório deve ter no máximo 100 caracteres")
    .required("O campo Sistema Respiratório é obrigatório"),
  anm_inter_sis_circu: yup
    .string()
    .max(100, "O sistema circulatório deve ter no máximo 100 caracteres")
    .required("O campo Sistema Circulatório é obrigatório"),
  anm_inter_sis_gastro: yup
    .string()
    .max(100, "O sistema gastrointestinal deve ter no máximo 100 caracteres")
    .required("O campo Sistema Gastrointestinal é obrigatório"),
  anm_inter_sis_genito_uri: yup
    .string()
    .max(100, "O sistema genitourinário deve ter no máximo 100 caracteres")
    .required("O campo Sistema Genitourinário é obrigatório"),
  anm_inter_asp_psico_emocional: yup
    .string()
    .max(100, "O aspecto psico-emocional deve ter no máximo 100 caracteres")
    .required("O campo Aspecto Psico-Emocional é obrigatório"),
  anm_inter_int_fisica_medica: yup
    .string()
    .max(100, "A intervenção física médica deve ter no máximo 100 caracteres")
    .required("O campo Intervenção Física Médica é obrigatório"),
  anm_inter_comunica_med: yup
    .string()
    .max(100, "A comunicação médica deve ter no máximo 100 caracteres")
    .required("O campo Comunicação Médica é obrigatório"),
  anm_inter_sis_resp_med: yup
    .string()
    .max(100, "O sistema respiratório médico deve ter no máximo 100 caracteres")
    .required("O campo Sistema Respiratório Médico é obrigatório"),
  anm_inter_sis_cardio_med: yup
    .string()
    .max(
      100,
      "O sistema cardiovascular médico deve ter no máximo 100 caracteres"
    )
    .required("O campo Sistema Cardiovascular Médico é obrigatório"),
  anm_inter_sis_gastro_med: yup
    .string()
    .max(
      2000,
      "O sistema gastrointestinal médico deve ter no máximo 2000 caracteres"
    )
    .required("O campo Sistema Gastrointestinal Médico é obrigatório"),
  anm_inter_sis_imuno_med: yup
    .string()
    .max(
      2000,
      "O sistema imunológico médico deve ter no máximo 2000 caracteres"
    )
    .required("O campo Sistema Imunológico Médico é obrigatório"),
  anm_inter_asp_prev_promocao_saude: yup
    .string()
    .max(
      2000,
      "O aspecto preventivo e promoção da saúde deve ter no máximo 2000 caracteres"
    )
    .required("O campo Aspecto Preventivo e Promoção da Saúde é obrigatório"),
  anm_inter_enfermeiro: yup
    .string()
    .max(100, "O enfermeiro deve ter no máximo 100 caracteres")
    .required("O campo Enfermeiro é obrigatório"),
  anm_inter_enfermeiro_coren: yup
    .string()
    .max(100, "O COREN do enfermeiro deve ter no máximo 100 caracteres")
    .required("O campo COREN Enfermeiro é obrigatório"),
  anm_inter_enfermeiro_data: yup
    .date()
    .required("O campo Data do Enfermeiro é obrigatório"),
});

export default validationSchema;
