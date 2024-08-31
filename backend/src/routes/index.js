import express from "express";

import * as Anamnese from "../Controller/Anamnese.js";
import * as Pacientes from "../Controller/Pacientes.js";

const routes = express.Router();

routes.get("/health", Anamnese.health);
routes.get("/anamnese", Anamnese.index);
routes.get("/anamnese/armazenar", Anamnese.indexArmazenar);
routes.post("/anamnese/reprovar", Anamnese.reprovar);
routes.post("/anamnese/aprovar", Anamnese.aprovar);
routes.post("/anamnese/create", Anamnese.store);
routes.delete("/anamnese/:cpf_pac", Anamnese.remove);
routes.get(
  "/pacientes/sem-anamnese-ou-pendente-ou-reprovada",
  Pacientes.listarPacientesSemAnamneseOuPendenteOuReprovada
);

export default routes;
