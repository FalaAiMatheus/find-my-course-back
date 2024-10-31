import { CourseController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCourses, getCourse } = new CourseController();

router.get('/courses/:id', getCourse);
router.get('/courses', getCourses);

export default router;
