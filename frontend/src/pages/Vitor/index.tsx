import React from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  cpf_pac: yup.string().length(11).required("CPF é obrigatório"),
  anm_nome: yup.string().max(100).required("Nome é obrigatório"),
  anm_idade: yup.number().integer().max(999).required("Idade é obrigatória"),
  anm_sexo: yup.string().length(1).required("Sexo é obrigatório"),
  anm_rg: yup.string().max(9).required("RG é obrigatório"),
  anm_cpf: yup.string().length(11).required("CPF é obrigatório"),
  anm_leito: yup.number().integer().max(9).required("Leito é obrigatório"),
  anm_prof: yup.string().max(60).required("Profissão é obrigatória"),
  anm_escolaridade: yup.string().max(60).required("Escolaridade é obrigatória"),
  anm_estado_civil: yup.string().max(20).required("Estado Civil é obrigatório"),
  anm_diagno_med: yup
    .string()
    .max(100)
    .required("Diagnóstico Médico é obrigatório"),
  anm_motivo: yup.string().max(2000).required("Motivo é obrigatório"),
  anm_doenca_cronica: yup
    .string()
    .max(2000)
    .required("Doença Crônica é obrigatória"),
  anm_trata_antes: yup
    .string()
    .max(2000)
    .required("Tratamento Anterior é obrigatório"),
  anm_fator_risco: yup
    .number()
    .integer()
    .max(9)
    .required("Fator de Risco é obrigatório"),
  anm_med_uso: yup
    .string()
    .max(2000)
    .required("Medicamentos em Uso é obrigatório"),
  anm_ant_familiar: yup
    .string()
    .max(100)
    .required("Antecedentes Familiares é obrigatório"),
  anm_condi_mora: yup
    .string()
    .length(1)
    .required("Condição de Moradia é obrigatória"),
  anm_cuida_corpo: yup
    .string()
    .length(1)
    .required("Cuida do Corpo é obrigatório"),
  anm_habi_banho: yup
    .string()
    .length(1)
    .required("Hábito de Banho é obrigatório"),
  anm_ativ_fisi_traba: yup
    .string()
    .max(100)
    .required("Atividade Física no Trabalho é obrigatória"),
  anm_sono_repo: yup.string().max(100).required("Sono e Repouso é obrigatório"),
  anm_exec_fisi_prog: yup
    .string()
    .max(100)
    .required("Execução de Fisioterapia Programada é obrigatória"),
  anm_rec_lazer: yup
    .string()
    .max(100)
    .required("Recreação e Lazer é obrigatória"),
  anm_cost_comer_freq: yup
    .string()
    .max(100)
    .required("Frequência de Alimentação é obrigatória"),
  anm_elim_uri: yup
    .string()
    .max(100)
    .required("Eliminação Urinária é obrigatória"),
  anm_elim_int: yup
    .string()
    .max(100)
    .required("Eliminação Intestinal é obrigatória"),
  anm_ciclo_menst: yup
    .string()
    .max(100)
    .required("Ciclo Menstrual é obrigatório"),
  anm_ativ_sex: yup
    .string()
    .max(100)
    .required("Atividade Sexual é obrigatória"),
  anm_hidratacao: yup.string().max(100).required("Hidratação é obrigatória"),
  anm_cor_muco: yup.string().max(100).required("Cor do Muco é obrigatória"),
  anm_temperatura: yup.string().max(100).required("Temperatura é obrigatória"),
  anm_pressao: yup.string().max(100).required("Pressão é obrigatória"),
  anm_pulso: yup.string().max(100).required("Pulso é obrigatório"),
  anm_respiracao: yup.string().max(100).required("Respiração é obrigatória"),
  anm_glicemia: yup.string().max(100).required("Glicemia é obrigatória"),
  anm_dor: yup.string().max(100).required("Dor é obrigatória"),
  anm_peso: yup.string().max(100).required("Peso é obrigatório"),
  anm_altura: yup.string().max(100).required("Altura é obrigatória"),
  anm_imc: yup.string().max(100).required("IMC é obrigatório"),
  anm_estado_nutri: yup
    .string()
    .max(100)
    .required("Estado Nutricional é obrigatório"),
  anm_nivel_conce: yup
    .string()
    .max(100)
    .required("Nível de Consciência é obrigatório"),
  anm_movi: yup.string().max(100).required("Movimentação é obrigatória"),
  anm_pele: yup.string().max(100).required("Pele é obrigatória"),
  anm_cranio: yup.string().max(100).required("Crânio é obrigatório"),
  anm_olhos: yup.string().max(100).required("Olhos é obrigatório"),
  anm_ouvido: yup.string().max(100).required("Ouvido é obrigatório"),
  anm_nariz: yup.string().max(100).required("Nariz é obrigatório"),
  anm_boca: yup.string().max(100).required("Boca é obrigatória"),
  anm_pescoco: yup.string().max(100).required("Pescoço é obrigatório"),
  anm_torax: yup.string().max(100).required("Tórax é obrigatório"),
  anm_mamas: yup.string().max(100).required("Mamas é obrigatório"),
  anm_auscut_pulmao: yup
    .string()
    .max(100)
    .required("Ausculta Pulmonar é obrigatória"),
  anm_oxi: yup.string().max(100).required("Oxigenação é obrigatória"),
  anm_coracao: yup.string().max(100).required("Coração é obrigatório"),
  anm_precordio: yup.string().max(100).required("Precórdio é obrigatório"),
  anm_abdomen: yup.string().max(100).required("Abdômen é obrigatório"),
  anm_genitu: yup.string().max(100).required("Genitália é obrigatória"),
  anm_membro_sup: yup
    .string()
    .max(100)
    .required("Membro Superior é obrigatório"),
  anm_membro_inf: yup
    .string()
    .max(100)
    .required("Membro Inferior é obrigatório"),
  anm_med_casa: yup
    .string()
    .max(200)
    .required("Medicação de Casa é obrigatória"),
  anm_exame_lab: yup
    .string()
    .max(2000)
    .required("Exames Laboratoriais são obrigatórios"),
  anm_outras_queixas: yup
    .string()
    .max(2000)
    .required("Outras Queixas são obrigatórias"),
  anm_int_social: yup
    .number()
    .integer()
    .max(9)
    .required("Integração Social é obrigatória"),
  anm_reso_prob: yup
    .number()
    .integer()
    .max(9)
    .required("Resolução de Problemas é obrigatória"),
  anm_apoio_spiri: yup
    .number()
    .integer()
    .max(9)
    .required("Apoio Espiritual é obrigatório"),
  anm_sup_finan: yup
    .string()
    .max(100)
    .required("Suporte Financeiro é obrigatório"),
  anm_conhe_prob_saude: yup
    .string()
    .max(100)
    .required("Conhecimento sobre Problemas de Saúde é obrigatório"),
  anm_cond_autocare: yup
    .string()
    .max(100)
    .required("Condição de Autocuidado é obrigatória"),
  anm_mudanca_humor: yup
    .string()
    .max(100)
    .required("Mudança de Humor é obrigatória"),
  anm_dado_area: yup
    .string()
    .max(2000)
    .required("Dados da Área são obrigatórios"),
  anm_inter_imp_entrevista: yup
    .string()
    .max(2000)
    .required("Impressão da Entrevista é obrigatória"),
  anm_inter_int_fisica: yup
    .string()
    .max(100)
    .required("Interação Física é obrigatória"),
  anm_inter_comunica: yup
    .string()
    .max(100)
    .required("Comunicação é obrigatória"),
  anm_inter_sis_resp: yup
    .string()
    .max(100)
    .required("Sistema Respiratório é obrigatório"),
  anm_inter_sis_circu: yup
    .string()
    .max(100)
    .required("Sistema Circulatório é obrigatório"),
  anm_inter_sis_gastro: yup
    .string()
    .max(100)
    .required("Sistema Gastrointestinal é obrigatório"),
  anm_inter_sis_genito_uri: yup
    .string()
    .max(100)
    .required("Sistema Genito-Urinário é obrigatório"),
  anm_inter_asp_psico_emocional: yup
    .string()
    .max(100)
    .required("Aspecto Psico-Emocional é obrigatório"),
  anm_inter_int_fisica_medica: yup
    .string()
    .max(100)
    .required("Intervenção Física Médica é obrigatória"),
  anm_inter_comunica_med: yup
    .string()
    .max(100)
    .required("Comunicação Médica é obrigatória"),
  anm_inter_sis_resp_med: yup
    .string()
    .max(100)
    .required("Sistema Respiratório Médico é obrigatório"),
  anm_inter_sis_cardio_med: yup
    .string()
    .max(100)
    .required("Sistema Cardíaco Médico é obrigatório"),
  anm_inter_sis_gastro_med: yup
    .string()
    .max(2000)
    .required("Sistema Gastrointestinal Médico é obrigatório"),
  anm_inter_sis_imuno_med: yup
    .string()
    .max(2000)
    .required("Sistema Imunológico Médico é obrigatório"),
  anm_inter_asp_prev_promocao_saude: yup
    .string()
    .max(2000)
    .required("Aspecto de Promoção à Saúde é obrigatório"),
  anm_inter_enfermeiro: yup
    .string()
    .max(100)
    .required("Enfermeiro é obrigatório"),
  anm_inter_enfermeiro_coren: yup
    .string()
    .max(100)
    .required("COREN é obrigatório"),
  anm_inter_enfermeiro_data: yup.date().required("Data é obrigatória"),
});

type VitorProps = {
  //
};

const Vitor: React.FC<VitorProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro de Anamnese
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="cpf_pac"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CPF do Paciente"
                  fullWidth
                  error={!!errors.cpf_pac}
                  helperText={errors.cpf_pac ? errors.cpf_pac.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_nome"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome"
                  fullWidth
                  error={!!errors.anm_nome}
                  helperText={errors.anm_nome ? errors.anm_nome.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_idade"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Idade"
                  type="number"
                  fullWidth
                  error={!!errors.anm_idade}
                  helperText={errors.anm_idade ? errors.anm_idade.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_sexo"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Sexo"
                  fullWidth
                  error={!!errors.anm_sexo}
                  helperText={errors.anm_sexo ? errors.anm_sexo.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_rg"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="RG"
                  fullWidth
                  error={!!errors.anm_rg}
                  helperText={errors.anm_rg ? errors.anm_rg.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_cpf"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CPF"
                  fullWidth
                  error={!!errors.anm_cpf}
                  helperText={errors.anm_cpf ? errors.anm_cpf.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_leito"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Leito"
                  type="number"
                  fullWidth
                  error={!!errors.anm_leito}
                  helperText={errors.anm_leito ? errors.anm_leito.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_prof"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Profissão"
                  fullWidth
                  error={!!errors.anm_prof}
                  helperText={errors.anm_prof ? errors.anm_prof.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_escolaridade"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Escolaridade"
                  fullWidth
                  error={!!errors.anm_escolaridade}
                  helperText={
                    errors.anm_escolaridade
                      ? errors.anm_escolaridade.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_estado_civil"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Estado Civil"
                  fullWidth
                  error={!!errors.anm_estado_civil}
                  helperText={
                    errors.anm_estado_civil
                      ? errors.anm_estado_civil.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_diagno_med"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Diagnóstico Médico"
                  fullWidth
                  error={!!errors.anm_diagno_med}
                  helperText={
                    errors.anm_diagno_med ? errors.anm_diagno_med.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_motivo"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Motivo"
                  fullWidth
                  error={!!errors.anm_motivo}
                  helperText={
                    errors.anm_motivo ? errors.anm_motivo.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_doenca_cronica"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Doença Crônica"
                  fullWidth
                  error={!!errors.anm_doenca_cronica}
                  helperText={
                    errors.anm_doenca_cronica
                      ? errors.anm_doenca_cronica.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_trata_antes"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Tratamento Anterior"
                  fullWidth
                  error={!!errors.anm_trata_antes}
                  helperText={
                    errors.anm_trata_antes ? errors.anm_trata_antes.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_fator_risco"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Fator de Risco"
                  type="number"
                  fullWidth
                  error={!!errors.anm_fator_risco}
                  helperText={
                    errors.anm_fator_risco ? errors.anm_fator_risco.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_med_uso"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Medicamentos em Uso"
                  fullWidth
                  error={!!errors.anm_med_uso}
                  helperText={
                    errors.anm_med_uso ? errors.anm_med_uso.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_ant_familiar"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Antecedentes Familiares"
                  fullWidth
                  error={!!errors.anm_ant_familiar}
                  helperText={
                    errors.anm_ant_familiar
                      ? errors.anm_ant_familiar.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_condi_mora"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Condição de Moradia"
                  fullWidth
                  error={!!errors.anm_condi_mora}
                  helperText={
                    errors.anm_condi_mora ? errors.anm_condi_mora.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_cuida_corpo"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Cuida do Corpo"
                  fullWidth
                  error={!!errors.anm_cuida_corpo}
                  helperText={
                    errors.anm_cuida_corpo ? errors.anm_cuida_corpo.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_habi_banho"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Hábito de Banho"
                  fullWidth
                  error={!!errors.anm_habi_banho}
                  helperText={
                    errors.anm_habi_banho ? errors.anm_habi_banho.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_ativ_fisi_traba"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Atividade Física no Trabalho"
                  fullWidth
                  error={!!errors.anm_ativ_fisi_traba}
                  helperText={
                    errors.anm_ativ_fisi_traba
                      ? errors.anm_ativ_fisi_traba.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_sono_repo"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Sono e Repouso"
                  fullWidth
                  error={!!errors.anm_sono_repo}
                  helperText={
                    errors.anm_sono_repo ? errors.anm_sono_repo.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_exec_fisi_prog"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Execução de Fisioterapia Programada"
                  fullWidth
                  error={!!errors.anm_exec_fisi_prog}
                  helperText={
                    errors.anm_exec_fisi_prog
                      ? errors.anm_exec_fisi_prog.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_rec_lazer"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Recreação e Lazer"
                  fullWidth
                  error={!!errors.anm_rec_lazer}
                  helperText={
                    errors.anm_rec_lazer ? errors.anm_rec_lazer.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_cost_comer_freq"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Custo de Comer com Frequência"
                  fullWidth
                  error={!!errors.anm_cost_comer_freq}
                  helperText={
                    errors.anm_cost_comer_freq
                      ? errors.anm_cost_comer_freq.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_elim_uri"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Eliminação Urinária"
                  fullWidth
                  error={!!errors.anm_elim_uri}
                  helperText={
                    errors.anm_elim_uri ? errors.anm_elim_uri.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_elim_int"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Eliminação Intestinal"
                  fullWidth
                  error={!!errors.anm_elim_int}
                  helperText={
                    errors.anm_elim_int ? errors.anm_elim_int.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_ciclo_menst"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ciclo Menstrual"
                  fullWidth
                  error={!!errors.anm_ciclo_menst}
                  helperText={
                    errors.anm_ciclo_menst ? errors.anm_ciclo_menst.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_ativ_sex"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Atividade Sexual"
                  fullWidth
                  error={!!errors.anm_ativ_sex}
                  helperText={
                    errors.anm_ativ_sex ? errors.anm_ativ_sex.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_hidratacao"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Hidratação"
                  fullWidth
                  error={!!errors.anm_hidratacao}
                  helperText={
                    errors.anm_hidratacao ? errors.anm_hidratacao.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_cor_muco"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Cor da Mucosa"
                  fullWidth
                  error={!!errors.anm_cor_muco}
                  helperText={
                    errors.anm_cor_muco ? errors.anm_cor_muco.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_temperatura"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Temperatura"
                  fullWidth
                  error={!!errors.anm_temperatura}
                  helperText={
                    errors.anm_temperatura ? errors.anm_temperatura.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_pressao"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pressão"
                  fullWidth
                  error={!!errors.anm_pressao}
                  helperText={
                    errors.anm_pressao ? errors.anm_pressao.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_pulso"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pulso"
                  fullWidth
                  error={!!errors.anm_pulso}
                  helperText={errors.anm_pulso ? errors.anm_pulso.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_respiracao"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Respiração"
                  fullWidth
                  error={!!errors.anm_respiracao}
                  helperText={
                    errors.anm_respiracao ? errors.anm_respiracao.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_glicemia"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Glicemia"
                  fullWidth
                  error={!!errors.anm_glicemia}
                  helperText={
                    errors.anm_glicemia ? errors.anm_glicemia.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_dor"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Dor"
                  fullWidth
                  error={!!errors.anm_dor}
                  helperText={errors.anm_dor ? errors.anm_dor.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_peso"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Peso"
                  fullWidth
                  error={!!errors.anm_peso}
                  helperText={errors.anm_peso ? errors.anm_peso.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_altura"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Altura"
                  fullWidth
                  error={!!errors.anm_altura}
                  helperText={
                    errors.anm_altura ? errors.anm_altura.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_imc"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="IMC"
                  fullWidth
                  error={!!errors.anm_imc}
                  helperText={errors.anm_imc ? errors.anm_imc.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_estado_nutri"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Estado Nutricional"
                  fullWidth
                  error={!!errors.anm_estado_nutri}
                  helperText={
                    errors.anm_estado_nutri
                      ? errors.anm_estado_nutri.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_nivel_conce"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nível de Conhecimento"
                  fullWidth
                  error={!!errors.anm_nivel_conce}
                  helperText={
                    errors.anm_nivel_conce ? errors.anm_nivel_conce.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_movi"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobilidade"
                  fullWidth
                  error={!!errors.anm_movi}
                  helperText={errors.anm_movi ? errors.anm_movi.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_pele"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pele"
                  fullWidth
                  error={!!errors.anm_pele}
                  helperText={errors.anm_pele ? errors.anm_pele.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_cranio"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Crânio"
                  fullWidth
                  error={!!errors.anm_cranio}
                  helperText={
                    errors.anm_cranio ? errors.anm_cranio.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_olhos"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Olhos"
                  fullWidth
                  error={!!errors.anm_olhos}
                  helperText={errors.anm_olhos ? errors.anm_olhos.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_ouvido"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Ouvido"
                  fullWidth
                  error={!!errors.anm_ouvido}
                  helperText={
                    errors.anm_ouvido ? errors.anm_ouvido.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_nariz"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nariz"
                  fullWidth
                  error={!!errors.anm_nariz}
                  helperText={errors.anm_nariz ? errors.anm_nariz.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_boca"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Boca"
                  fullWidth
                  error={!!errors.anm_boca}
                  helperText={errors.anm_boca ? errors.anm_boca.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_pescoco"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pescoço"
                  fullWidth
                  error={!!errors.anm_pescoco}
                  helperText={
                    errors.anm_pescoco ? errors.anm_pescoco.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_torax"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Tórax"
                  fullWidth
                  error={!!errors.anm_torax}
                  helperText={errors.anm_torax ? errors.anm_torax.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_mamas"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mamas"
                  fullWidth
                  error={!!errors.anm_mamas}
                  helperText={errors.anm_mamas ? errors.anm_mamas.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_auscut_pulmao"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Auscultação Pulmonar"
                  fullWidth
                  error={!!errors.anm_auscut_pulmao}
                  helperText={
                    errors.anm_auscut_pulmao
                      ? errors.anm_auscut_pulmao.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_oxi"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Oxi"
                  fullWidth
                  error={!!errors.anm_oxi}
                  helperText={errors.anm_oxi ? errors.anm_oxi.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_coracao"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Coração"
                  fullWidth
                  error={!!errors.anm_coracao}
                  helperText={
                    errors.anm_coracao ? errors.anm_coracao.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_precordio"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Precordio"
                  fullWidth
                  error={!!errors.anm_precordio}
                  helperText={
                    errors.anm_precordio ? errors.anm_precordio.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_abdomen"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Abdômen"
                  fullWidth
                  error={!!errors.anm_abdomen}
                  helperText={
                    errors.anm_abdomen ? errors.anm_abdomen.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_genitu"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Genitália"
                  fullWidth
                  error={!!errors.anm_genitu}
                  helperText={
                    errors.anm_genitu ? errors.anm_genitu.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_membro_sup"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Membros Superiores"
                  fullWidth
                  error={!!errors.anm_membro_sup}
                  helperText={
                    errors.anm_membro_sup ? errors.anm_membro_sup.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_membro_inf"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Membros Inferiores"
                  fullWidth
                  error={!!errors.anm_membro_inf}
                  helperText={
                    errors.anm_membro_inf ? errors.anm_membro_inf.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_med_casa"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Medicamentos em Casa"
                  fullWidth
                  error={!!errors.anm_med_casa}
                  helperText={
                    errors.anm_med_casa ? errors.anm_med_casa.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_exame_lab"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Exames Laboratoriais"
                  fullWidth
                  error={!!errors.anm_exame_lab}
                  helperText={
                    errors.anm_exame_lab ? errors.anm_exame_lab.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_outras_queixas"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Outras Queixas"
                  fullWidth
                  error={!!errors.anm_outras_queixas}
                  helperText={
                    errors.anm_outras_queixas
                      ? errors.anm_outras_queixas.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_int_social"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Integração Social"
                  type="number"
                  fullWidth
                  error={!!errors.anm_int_social}
                  helperText={
                    errors.anm_int_social ? errors.anm_int_social.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_reso_prob"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Resolução de Problemas"
                  type="number"
                  fullWidth
                  error={!!errors.anm_reso_prob}
                  helperText={
                    errors.anm_reso_prob ? errors.anm_reso_prob.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_apoio_spiri"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Apoio Espiritual"
                  type="number"
                  fullWidth
                  error={!!errors.anm_apoio_spiri}
                  helperText={
                    errors.anm_apoio_spiri ? errors.anm_apoio_spiri.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_sup_finan"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Suporte Financeiro"
                  fullWidth
                  error={!!errors.anm_sup_finan}
                  helperText={
                    errors.anm_sup_finan ? errors.anm_sup_finan.message : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="anm_conhe_prob_saude"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Conhecimento sobre Problemas de Saúde"
                  fullWidth
                  error={!!errors.anm_conhe_prob_saude}
                  helperText={
                    errors.anm_conhe_prob_saude
                      ? errors.anm_conhe_prob_saude.message
                      : ""
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Vitor;
