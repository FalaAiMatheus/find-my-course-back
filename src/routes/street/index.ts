import { StreetController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getStreet, getStreets } = new StreetController();

router.get('/streets/:id', getStreet);
router.get('/streets', getStreets);

export default router;
