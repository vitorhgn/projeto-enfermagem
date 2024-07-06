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
        where: { cpf_pac: req.body.cpf_pac },
        individualHooks: true,
      }
    );
    res.status(200).json(anamnese);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao aprovar anamnese do paciente" });
  }
};

export const reprovar = async (req, res) => {
  try {
    const anamnese = await Anamnese.update(
      { status_anamnese: "R" },
      {
        where: { cpf_pac: req.body.cpf_pac },
        individualHooks: true,
      }
    );
    res.status(200).json(anamnese);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao reprovar anamnese do paciente" });
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

export const remove = async (req, res) => {
  try {
    const { cpf_pac } = req.params;
    const anamnese = await Anamnese.findByPk(cpf_pac);

    if (!anamnese) {
      return res.status(404).json({ error: "Anamnese não encontrada" });
    }

    await Anamnese.destroy({ where: { cpf_pac } });
    return res.status(200).json({ message: "Anamnese deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar anamnese" });
  }
};
