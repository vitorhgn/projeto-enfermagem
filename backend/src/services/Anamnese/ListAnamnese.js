import Anamnese from "../../models/Anamnese.js";

async function ListAnamnese(cod_anamnese) {
  try {
    if (cod_anamnese) {
      const anamnese = await Anamnese.findByPk(cod_anamnese);
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
