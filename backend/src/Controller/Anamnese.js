import Anamnese from "../models/Anamnese.js";
import CreateOrUpdate from "../services/Anamnese/CreateOrUpdate.js";
import ListAnamnese from "../services/Anamnese/ListAnamnese.js";

export const index = async (req, res) => {
  try {
    const anamneses = await ListAnamnese();
    res.status(200).json(anamneses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamnese do paciente" });
  }
};
export const aprovar = async (req, res) => {
  try {
    const anamnese = await Anamnese.update(
      { status_anamnese: "A" },
      {
        where: { cpf_pac: res.body.cpf_pac },
      }
    );
    res.status(200).json(anamneses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao aprovar do paciente" });
  }
};
export const reprovar = async (req, res) => {
  try {
    const anamnese = await Anamnese.update(
      { status_anamnese: "R" },
      {
        where: { cpf_pac: res.body.cpf_pac },
      }
    );
    res.status(200).json(anamneses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao reprovar do paciente" });
  }
};

export const find = async (req, res) => {
  try {
    const { cpf } = req.body.cpf_pac;
    const anamneses = await ListAnamnese(cpf);
    res.status(200).json(anamneses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamnese do paciente" });
  }
};

export const health = async (req, res) => {
  return res.json({ message: "Healthy" });
};

export const store = async (req, res) => {
  try {
    const anamnese = await CreateOrUpdate(req.body);
    res.status(201).json(anamnese);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
