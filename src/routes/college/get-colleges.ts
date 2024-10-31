import { CollegeController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getColleges } = new CollegeController();

router.get('/colleges', getColleges);

export default router;
