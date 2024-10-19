import sequelize from "../database/index.js";
import { DataTypes } from "@sequelize/core";

const Profissional = sequelize.define(
  "Profissional",
  {
    cod_profissional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_prof: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    registro_prof: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    especialidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Especialidades",
        key: "cod_especialidade",
      },
    },
    tel_prof: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    email_prof: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "profissionais",
    timestamps: true,
  }
);

export default Profissional;
