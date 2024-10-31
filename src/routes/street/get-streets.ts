import { StreetController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getStreets } = new StreetController();

router.get('/streets', getStreets);

export default router;
