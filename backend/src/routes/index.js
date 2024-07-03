import express from "express";

import * as Anamnese from "../Controller/Anamnese.js";

const routes = express.Router();

routes.get("/health", Anamnese.health);
routes.get("/anamnese/list", Anamnese.index);
routes.get("/anamnese/list/:id", Anamnese.find);
routes.post("/anamnese/create", Anamnese.store);

export default routes;
