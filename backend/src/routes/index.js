import express from "express";

import * as Anamnese from "../Controller/Anamnese.js";

const routes = express.Router();

routes.get("/health", Anamnese.health);
routes.get("/anamnese/list", Anamnese.index);
routes.post("/anamnese/reprovar", Anamnese.reprovar);
routes.post("/anamnese/aprovar", Anamnese.aprovar);
routes.post("/anamnese/create", Anamnese.store);
routes.delete("/anamnese/:cpf_pac", Anamnese.remove);

export default routes;
