import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import eventsRouter from '../api/events-router.js';
import usersRouter from '../api/users-router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/events', eventsRouter);
app.use('/api/users', usersRouter);

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
