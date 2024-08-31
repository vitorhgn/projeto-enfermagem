import sequelize from "../database/index.js";
import { DataTypes } from "@sequelize/core";
import Anamnese from "./Anamnese.js";

// Definição do modelo Paciente
const Paciente = sequelize.define(
  "Paciente",
  {
    cpf_pac: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
      validate: {
        is: /^[0-9]{11}$/, // validação para CPF com 11 dígitos
      },
    },
    nome_pac: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tel_pac: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    cep_pac: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    logra_pac: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    num_logra_pac: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    compl_pac: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    bairro_pac: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    cidade_pac: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    uf_pac: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    rg_pac: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    est_rg_pac: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    nome_mae_pac: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    data_nasc_pac: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "pacientes",
    timestamps: true,
  }
);

export default Paciente;
