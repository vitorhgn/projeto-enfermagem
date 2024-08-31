import Paciente from "../models/Pacientes.js";
import Anamnese from "../models/Anamnese.js";
import { Op } from "@sequelize/core";

export const listarPacientesSemAnamneseOuPendenteOuReprovada = async (
  req,
  res
) => {
  try {
    const pacientes = await Paciente.findAll({
      include: [
        {
          model: Anamnese,
          as: "anamneses",
          where: {
            status_anamnese: {
              [Op.in]: ["P", "R"],
            },
          },
          required: false,
        },
      ],
    });

    // Filtra os pacientes que não possuem nenhum registro na tabela anamnese
    // ou que possuem anamnese com status "P" ou "R"
    const pacientesFiltrados = pacientes.filter(
      (paciente) =>
        !paciente.anamneses.length ||
        paciente.anamneses.some((anamnese) =>
          ["P", "R"].includes(anamnese.status_anamnese)
        )
    );

    res.status(200).json(pacientesFiltrados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar pacientes" });
  }
};
