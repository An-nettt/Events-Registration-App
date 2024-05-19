import express from 'express';
import cors from 'cors';

import eventsRouter from './routes/api/events-router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', eventsRouter);

export default app;
