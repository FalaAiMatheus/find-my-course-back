import { TeachingModalityController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { allModalitys, getModalitys } = new TeachingModalityController();

router.get('/teaching-modalitys', allModalitys);
router.get('/teaching-modalitys/:id', getModalitys);

export default router;
