import './database/index.js';

import cors from 'cors';
import express from 'express';

import routes from './routes/index.js';


const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(routes);


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(async (err, req, res, _next) => {
  if (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(500).json({ error: err.message });
});

export default app;