import express from 'express';

import getAllUsers from '../../controllers/users-controller.js';
// import usersController from '../../controllers/users-controller.js';

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

export default usersRouter;
