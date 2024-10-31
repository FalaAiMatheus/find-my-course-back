import { StreetController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getStreet } = new StreetController();

router.get('/streets/:id', getStreet);

export default router;
