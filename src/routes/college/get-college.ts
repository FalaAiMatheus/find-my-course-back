import { CollegeController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCollege } = new CollegeController();

router.get('/colleges/:id', getCollege);

export default router;
