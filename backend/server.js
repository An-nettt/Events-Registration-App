import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app.js';

dotenv.config();

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const db = mongoose.connection;
db.on('connected', () => console.log('connected'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
