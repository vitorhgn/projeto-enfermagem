import axios from "axios";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const validationSchema = yup.object().shape({
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

type FormValues = yup.InferType<typeof validationSchema>;

const CadastroAnamnese: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const anamnese = location.state?.anamnese || {};

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: anamnese,
  });

  useEffect(() => {
    const userType = localStorage.getItem("userType");

    if (userType !== "estagiario") {
      navigate("/gustavo");
    }

    if (anamnese) {
      Object.keys(anamnese).forEach((key) => {
        setValue(key as keyof FormValues, anamnese[key]);
      });
    }
  }, [navigate, anamnese, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/anamnese/create",
        data
      );
      console.log("Anamnese criada com sucesso:", response.data);
      navigate("/vitor");
    } catch (error) {
      console.error("Erro ao criar anamnese:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="cpf_pac"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="CPF Paciente"
                {...field}
                error={!!errors.cpf_pac}
                helperText={errors.cpf_pac ? errors.cpf_pac.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_nome"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Nome"
                {...field}
                error={!!errors.anm_nome}
                helperText={errors.anm_nome ? errors.anm_nome.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_idade"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Idade"
                type="number"
                {...field}
                error={!!errors.anm_idade}
                helperText={errors.anm_idade ? errors.anm_idade.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_sexo"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.anm_sexo}>
                <InputLabel>Sexo</InputLabel>
                <Select label="Sexo" {...field}>
                  <MenuItem value="M">Masculino</MenuItem>
                  <MenuItem value="F">Feminino</MenuItem>
                </Select>
                {errors.anm_sexo && <p>{errors.anm_sexo.message}</p>}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_rg"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="RG"
                {...field}
                error={!!errors.anm_rg}
                helperText={errors.anm_rg ? errors.anm_rg.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cpf"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="CPF"
                {...field}
                error={!!errors.anm_cpf}
                helperText={errors.anm_cpf ? errors.anm_cpf.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_leito"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Leito"
                type="number"
                {...field}
                error={!!errors.anm_leito}
                helperText={errors.anm_leito ? errors.anm_leito.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_prof"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Profissão"
                {...field}
                error={!!errors.anm_prof}
                helperText={errors.anm_prof ? errors.anm_prof.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_escolaridade"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Escolaridade"
                {...field}
                error={!!errors.anm_escolaridade}
                helperText={
                  errors.anm_escolaridade ? errors.anm_escolaridade.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_estado_civil"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.anm_estado_civil}>
                <InputLabel>Estado Civil</InputLabel>
                <Select label="Estado Civil" {...field}>
                  <MenuItem value="solteiro">Solteiro</MenuItem>
                  <MenuItem value="casado">Casado</MenuItem>
                  <MenuItem value="divorciado">Divorciado</MenuItem>
                  <MenuItem value="viuvo">Viúvo</MenuItem>
                </Select>
                {errors.anm_estado_civil && (
                  <p>{errors.anm_estado_civil.message}</p>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_diagno_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Diagnóstico Médico"
                {...field}
                error={!!errors.anm_diagno_med}
                helperText={
                  errors.anm_diagno_med ? errors.anm_diagno_med.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_motivo"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Motivo"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_motivo}
                helperText={errors.anm_motivo ? errors.anm_motivo.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_doenca_cronica"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Doença Crônica"
                multiline
                rows={4}
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_trata_antes"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Tratamento Anterior"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_trata_antes}
                helperText={
                  errors.anm_trata_antes ? errors.anm_trata_antes.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_fator_risco"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Fator de Risco"
                type="number"
                {...field}
                error={!!errors.anm_fator_risco}
                helperText={
                  errors.anm_fator_risco ? errors.anm_fator_risco.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_med_uso"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Medicamentos em Uso"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_med_uso}
                helperText={
                  errors.anm_med_uso ? errors.anm_med_uso.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_ant_familiar"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Antecedentes Familiares"
                {...field}
                error={!!errors.anm_ant_familiar}
                helperText={
                  errors.anm_ant_familiar ? errors.anm_ant_familiar.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_condi_mora"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.anm_condi_mora}>
                <InputLabel>Condição de Moradia</InputLabel>
                <Select label="Condição de Moradia" {...field}>
                  <MenuItem value="1">Própria</MenuItem>
                  <MenuItem value="2">Alugada</MenuItem>
                  <MenuItem value="3">Cedida</MenuItem>
                </Select>
                {errors.anm_condi_mora && (
                  <p>{errors.anm_condi_mora.message}</p>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cuida_corpo"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.anm_cuida_corpo}>
                <InputLabel>Cuidados com o Corpo</InputLabel>
                <Select label="Cuidados com o Corpo" {...field}>
                  <MenuItem value="1">Excelente</MenuItem>
                  <MenuItem value="2">Bom</MenuItem>
                  <MenuItem value="3">Regular</MenuItem>
                  <MenuItem value="4">Ruim</MenuItem>
                </Select>
                {errors.anm_cuida_corpo && (
                  <p>{errors.anm_cuida_corpo.message}</p>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_habi_banho"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.anm_habi_banho}>
                <InputLabel>Hábitos de Banho</InputLabel>
                <Select label="Hábitos de Banho" {...field}>
                  <MenuItem value="1">Diário</MenuItem>
                  <MenuItem value="2">Semanal</MenuItem>
                  <MenuItem value="3">Mensal</MenuItem>
                </Select>
                {errors.anm_habi_banho && (
                  <p>{errors.anm_habi_banho.message}</p>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_ativ_fisi_traba"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Atividade Física e Trabalho"
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_sono_repo"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sono e Repouso"
                {...field}
                error={!!errors.anm_sono_repo}
                helperText={
                  errors.anm_sono_repo ? errors.anm_sono_repo.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_exec_fisi_prog"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Exercício Físico Programado"
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_rec_lazer"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Recreação e Lazer"
                {...field}
                error={!!errors.anm_rec_lazer}
                helperText={
                  errors.anm_rec_lazer ? errors.anm_rec_lazer.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cost_comer_freq"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Costume Alimentar e Frequência"
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_elim_uri"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Eliminação Urinária"
                {...field}
                error={!!errors.anm_elim_uri}
                helperText={
                  errors.anm_elim_uri ? errors.anm_elim_uri.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_elim_int"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Eliminação Intestinal"
                {...field}
                error={!!errors.anm_elim_int}
                helperText={
                  errors.anm_elim_int ? errors.anm_elim_int.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_ciclo_menst"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Ciclo Menstrual"
                {...field}
                error={!!errors.anm_ciclo_menst}
                helperText={
                  errors.anm_ciclo_menst ? errors.anm_ciclo_menst.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_ativ_sex"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Atividade Sexual"
                {...field}
                error={!!errors.anm_ativ_sex}
                helperText={
                  errors.anm_ativ_sex ? errors.anm_ativ_sex.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_hidratacao"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Hidratação"
                {...field}
                error={!!errors.anm_hidratacao}
                helperText={
                  errors.anm_hidratacao ? errors.anm_hidratacao.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cor_muco"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Cor do Muco"
                {...field}
                error={!!errors.anm_cor_muco}
                helperText={
                  errors.anm_cor_muco ? errors.anm_cor_muco.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_temperatura"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Temperatura"
                {...field}
                error={!!errors.anm_temperatura}
                helperText={
                  errors.anm_temperatura ? errors.anm_temperatura.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_pressao"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Pressão"
                {...field}
                error={!!errors.anm_pressao}
                helperText={
                  errors.anm_pressao ? errors.anm_pressao.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_pulso"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Pulso"
                {...field}
                error={!!errors.anm_pulso}
                helperText={errors.anm_pulso ? errors.anm_pulso.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_respiracao"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Respiração"
                {...field}
                error={!!errors.anm_respiracao}
                helperText={
                  errors.anm_respiracao ? errors.anm_respiracao.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_glicemia"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Glicemia"
                {...field}
                error={!!errors.anm_glicemia}
                helperText={
                  errors.anm_glicemia ? errors.anm_glicemia.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_dor"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Dor"
                {...field}
                error={!!errors.anm_dor}
                helperText={errors.anm_dor ? errors.anm_dor.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_peso"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Peso"
                {...field}
                error={!!errors.anm_peso}
                helperText={errors.anm_peso ? errors.anm_peso.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_altura"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Altura"
                {...field}
                error={!!errors.anm_altura}
                helperText={errors.anm_altura ? errors.anm_altura.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_imc"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="IMC"
                {...field}
                error={!!errors.anm_imc}
                helperText={errors.anm_imc ? errors.anm_imc.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_estado_nutri"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Estado Nutricional"
                {...field}
                error={!!errors.anm_estado_nutri}
                helperText={
                  errors.anm_estado_nutri ? errors.anm_estado_nutri.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_nivel_conce"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Nível de Consciência"
                {...field}
                error={!!errors.anm_nivel_conce}
                helperText={
                  errors.anm_nivel_conce ? errors.anm_nivel_conce.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_movi"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Movimentação"
                {...field}
                error={!!errors.anm_movi}
                helperText={errors.anm_movi ? errors.anm_movi.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_pele"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Pele"
                {...field}
                error={!!errors.anm_pele}
                helperText={errors.anm_pele ? errors.anm_pele.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cranio"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Crânio"
                {...field}
                error={!!errors.anm_cranio}
                helperText={errors.anm_cranio ? errors.anm_cranio.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_olhos"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Olhos"
                {...field}
                error={!!errors.anm_olhos}
                helperText={errors.anm_olhos ? errors.anm_olhos.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_ouvido"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Ouvido"
                {...field}
                error={!!errors.anm_ouvido}
                helperText={errors.anm_ouvido ? errors.anm_ouvido.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_nariz"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Nariz"
                {...field}
                error={!!errors.anm_nariz}
                helperText={errors.anm_nariz ? errors.anm_nariz.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_boca"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Boca"
                {...field}
                error={!!errors.anm_boca}
                helperText={errors.anm_boca ? errors.anm_boca.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_pescoco"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Pescoço"
                {...field}
                error={!!errors.anm_pescoco}
                helperText={
                  errors.anm_pescoco ? errors.anm_pescoco.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_torax"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Tórax"
                {...field}
                error={!!errors.anm_torax}
                helperText={errors.anm_torax ? errors.anm_torax.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_mamas"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Mamas"
                {...field}
                error={!!errors.anm_mamas}
                helperText={errors.anm_mamas ? errors.anm_mamas.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_auscut_pulmao"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Ausculta Pulmonar"
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_oxi"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Oxigenação"
                {...field}
                error={!!errors.anm_oxi}
                helperText={errors.anm_oxi ? errors.anm_oxi.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_coracao"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Coração"
                {...field}
                error={!!errors.anm_coracao}
                helperText={
                  errors.anm_coracao ? errors.anm_coracao.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_precordio"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Pré-Córdio"
                {...field}
                error={!!errors.anm_precordio}
                helperText={
                  errors.anm_precordio ? errors.anm_precordio.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_abdomen"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Abdômen"
                {...field}
                error={!!errors.anm_abdomen}
                helperText={
                  errors.anm_abdomen ? errors.anm_abdomen.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_genitu"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Genitália"
                {...field}
                error={!!errors.anm_genitu}
                helperText={errors.anm_genitu ? errors.anm_genitu.message : ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_membro_sup"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Membros Superiores"
                {...field}
                error={!!errors.anm_membro_sup}
                helperText={
                  errors.anm_membro_sup ? errors.anm_membro_sup.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_membro_inf"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Membros Inferiores"
                {...field}
                error={!!errors.anm_membro_inf}
                helperText={
                  errors.anm_membro_inf ? errors.anm_membro_inf.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_med_casa"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Medicamentos em Casa"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_med_casa}
                helperText={
                  errors.anm_med_casa ? errors.anm_med_casa.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_exame_lab"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Exames Laboratoriais"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_exame_lab}
                helperText={
                  errors.anm_exame_lab ? errors.anm_exame_lab.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_outras_queixas"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Outras Queixas"
                multiline
                rows={4}
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_int_social"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Interação Social"
                type="number"
                {...field}
                error={!!errors.anm_int_social}
                helperText={
                  errors.anm_int_social ? errors.anm_int_social.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_reso_prob"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Resolução de Problemas"
                type="number"
                {...field}
                error={!!errors.anm_reso_prob}
                helperText={
                  errors.anm_reso_prob ? errors.anm_reso_prob.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_apoio_spiri"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Apoio Espiritual"
                type="number"
                {...field}
                error={!!errors.anm_apoio_spiri}
                helperText={
                  errors.anm_apoio_spiri ? errors.anm_apoio_spiri.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_sup_finan"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Suporte Financeiro"
                {...field}
                error={!!errors.anm_sup_finan}
                helperText={
                  errors.anm_sup_finan ? errors.anm_sup_finan.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_conhe_prob_saude"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Conhecimento sobre Problemas de Saúde"
                {...field}
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
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_cond_autocare"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Condição de Autocuidado"
                {...field}
                error={!!errors.anm_cond_autocare}
                helperText={
                  errors.anm_cond_autocare
                    ? errors.anm_cond_autocare.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_mudanca_humor"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Mudança de Humor"
                {...field}
                error={!!errors.anm_mudanca_humor}
                helperText={
                  errors.anm_mudanca_humor
                    ? errors.anm_mudanca_humor.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_dado_area"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Dados da Área"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_dado_area}
                helperText={
                  errors.anm_dado_area ? errors.anm_dado_area.message : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_imp_entrevista"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Impressão da Entrevista"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_inter_imp_entrevista}
                helperText={
                  errors.anm_inter_imp_entrevista
                    ? errors.anm_inter_imp_entrevista.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_int_fisica"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Intervenção Física"
                {...field}
                error={!!errors.anm_inter_int_fisica}
                helperText={
                  errors.anm_inter_int_fisica
                    ? errors.anm_inter_int_fisica.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_comunica"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Comunicação"
                {...field}
                error={!!errors.anm_inter_comunica}
                helperText={
                  errors.anm_inter_comunica
                    ? errors.anm_inter_comunica.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_resp"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Respiratório"
                {...field}
                error={!!errors.anm_inter_sis_resp}
                helperText={
                  errors.anm_inter_sis_resp
                    ? errors.anm_inter_sis_resp.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_circu"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Circulatório"
                {...field}
                error={!!errors.anm_inter_sis_circu}
                helperText={
                  errors.anm_inter_sis_circu
                    ? errors.anm_inter_sis_circu.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_gastro"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Gastrointestinal"
                {...field}
                error={!!errors.anm_inter_sis_gastro}
                helperText={
                  errors.anm_inter_sis_gastro
                    ? errors.anm_inter_sis_gastro.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_genito_uri"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Genitourinário"
                {...field}
                error={!!errors.anm_inter_sis_genito_uri}
                helperText={
                  errors.anm_inter_sis_genito_uri
                    ? errors.anm_inter_sis_genito_uri.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_asp_psico_emocional"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Aspecto Psico-Emocional"
                {...field}
                error={!!errors.anm_inter_asp_psico_emocional}
                helperText={
                  errors.anm_inter_asp_psico_emocional
                    ? errors.anm_inter_asp_psico_emocional.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_int_fisica_medica"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Intervenção Física Médica"
                {...field}
                error={!!errors.anm_inter_int_fisica_medica}
                helperText={
                  errors.anm_inter_int_fisica_medica
                    ? errors.anm_inter_int_fisica_medica.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_comunica_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Comunicação Médica"
                {...field}
                error={!!errors.anm_inter_comunica_med}
                helperText={
                  errors.anm_inter_comunica_med
                    ? errors.anm_inter_comunica_med.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_resp_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Respiratório Médico"
                {...field}
                error={!!errors.anm_inter_sis_resp_med}
                helperText={
                  errors.anm_inter_sis_resp_med
                    ? errors.anm_inter_sis_resp_med.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_cardio_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Cardiovascular Médico"
                {...field}
                error={!!errors.anm_inter_sis_cardio_med}
                helperText={
                  errors.anm_inter_sis_cardio_med
                    ? errors.anm_inter_sis_cardio_med.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_gastro_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Gastrointestinal Médico"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_inter_sis_gastro_med}
                helperText={
                  errors.anm_inter_sis_gastro_med
                    ? errors.anm_inter_sis_gastro_med.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_sis_imuno_med"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Sistema Imunológico Médico"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_inter_sis_imuno_med}
                helperText={
                  errors.anm_inter_sis_imuno_med
                    ? errors.anm_inter_sis_imuno_med.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_asp_prev_promocao_saude"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Aspecto Preventivo e Promoção da Saúde"
                multiline
                rows={4}
                {...field}
                error={!!errors.anm_inter_asp_prev_promocao_saude}
                helperText={
                  errors.anm_inter_asp_prev_promocao_saude
                    ? errors.anm_inter_asp_prev_promocao_saude.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_enfermeiro"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Enfermeiro"
                {...field}
                error={!!errors.anm_inter_enfermeiro}
                helperText={
                  errors.anm_inter_enfermeiro
                    ? errors.anm_inter_enfermeiro.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_enfermeiro_coren"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="COREN Enfermeiro"
                {...field}
                error={!!errors.anm_inter_enfermeiro_coren}
                helperText={
                  errors.anm_inter_enfermeiro_coren
                    ? errors.anm_inter_enfermeiro_coren.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="anm_inter_enfermeiro_data"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Data do Enfermeiro"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={
                  field.value
                    ? new Date(field.value).toISOString().split("T")[0]
                    : ""
                }
                onChange={field.onChange}
                error={!!errors.anm_inter_enfermeiro_data}
                helperText={
                  errors.anm_inter_enfermeiro_data
                    ? errors.anm_inter_enfermeiro_data.message
                    : ""
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CadastroAnamnese;