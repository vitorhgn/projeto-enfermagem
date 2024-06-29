import express from 'express';

import * as Anamnese from '../Controller/Anamnese.js'

const routes = express.Router();

routes.get('/anamnese/list', Anamnese.index);

export default routes;