import { CollegeController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getColleges, getCollege } = new CollegeController();

router.get('/colleges/:id', getCollege);
router.get('/colleges', getColleges);

export default router;
