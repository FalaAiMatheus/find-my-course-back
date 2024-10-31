import { CourseController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCourses } = new CourseController();

router.get('/courses', getCourses);

export default router;
