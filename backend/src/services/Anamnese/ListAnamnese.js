import Anamnese from "../../models/Anamnese.js";

async function ListAnamnese(cpf) {
  try {
    if (cpf) {
      const anamnese = await Anamnese.findByPk(cpf);
      return anamnese;
    } else {
      const anamnese = await Anamnese.findAll();
      return anamnese;
    }
  } catch (error) {
    console.error(error);
  }
}

export default ListAnamnese;
