import Anamnese from "../models/Anamnese.js";
import Armazenar from "../models/Armazenar.js";
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
    await Anamnese.update(
      { status_anamnese: "A" },
      {
        where: { cod_anamnese: req.body.cod_anamnese },
        individualHooks: true,
      }
    );

    const anamnese = await Anamnese.findByPk(req.body.cod_anamnese);

    if (!anamnese) {
      return res.status(404).json({ error: "Anamnese não encontrada" });
    }

    // Usa upsert para criar ou atualizar o registro na tabela Armazenar
    const anamneseData = anamnese.toJSON();
    await Armazenar.upsert(anamneseData);

    // Remove o registro da tabela Anamnese
    await Anamnese.destroy({ where: { cod_anamnese: req.body.cod_anamnese } });

    res.status(200).json({
      message: "Anamnese aprovada e movida para Armazenar com sucesso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao aprovar anamnese do paciente" });
  }
};

export const reprovar = async (req, res) => {
  try {
    await Anamnese.update(
      { status_anamnese: "R" },
      {
        where: { cod_anamnese: req.body.cod_anamnese },
        individualHooks: true,
      }
    );
    res.status(200).json({
      message: "Anamnese foi reprovada",
    });
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
    const { cod_anamnese } = req.params;
    const anamnese = await Anamnese.findByPk(cod_anamnese);

    if (!anamnese) {
      return res.status(404).json({ error: "Anamnese não encontrada" });
    }

    await Anamnese.destroy({ where: { cod_anamnese } });
    return res.status(200).json({ message: "Anamnese deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar anamnese" });
  }
};

export const indexArmazenar = async (req, res) => {
  try {
    const armazenar = await Armazenar.findAll();
    res.status(200).json(armazenar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar anamneses armazenadas" });
  }
};
