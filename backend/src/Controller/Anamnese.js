import CreateOrUpdate from "../services/Anamnese/CreateOrUpdate.js";
import ListAnamnese from "../services/Anamnese/ListAnamnese.js";

export const index = async (req, res) => {
  try {
    const pacientes = await ListAnamnese();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamnese do paciente" });
  }
};

export const find = async (req, res) => {
  try {
    const { cpf } = req.body.cpf_pac;
    const pacientes = await ListAnamnese(cpf);
    res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamnese do paciente" });
  }
};

export const health = async (req, res) => {
  return res.json({ message: "Health" });
};

export const store = async (req, res) => {
  try {
    const paciente = await CreateOrUpdate(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
