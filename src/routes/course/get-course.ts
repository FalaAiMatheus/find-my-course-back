import { CourseController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCourse } = new CourseController();

router.get('/courses/:id', getCourse);

export default router;
