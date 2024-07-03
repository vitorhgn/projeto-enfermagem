import Paciente from "../../models/Anamnese.js";

async function ListAnamnese(cpf) {
  try {
    if (cpf) {
      const anamnese = await Paciente.findByPk(cpf);
      res.status(200).json(anamnese);
    } else {
      const anamnese = await Paciente.findAll();
      res.status(200).json(anamnese);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamnese" });
  }
}

export default ListAnamnese;
