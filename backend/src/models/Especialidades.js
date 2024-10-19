import sequelize from "../database/index.js";
import { DataTypes } from "@sequelize/core";

const Especialidade = sequelize.define(
  "Especialidade",
  {
    cod_especialidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    especialidade: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  {
    tableName: "especialidades",
    timestamps: false,
  }
);

export default Especialidade;
