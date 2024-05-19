import express from 'express';

import getAll from '../../controllers/events-controller.js';

const router = express.Router();

router.get('/', getAll);

export default router;
