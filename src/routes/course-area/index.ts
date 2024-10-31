import { CourseAreaController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getArea, getAllAreas } = new CourseAreaController();

router.get('/areas', getAllAreas);
router.get('/areas/:id', getArea);

export default router;
