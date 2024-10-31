import { GraduationTypeController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { allGraduationTypes, getGraduationType } =
  new GraduationTypeController();

router.get('/graduation-types', allGraduationTypes);
router.get('/graduation-types/:id', getGraduationType);

export default router;
