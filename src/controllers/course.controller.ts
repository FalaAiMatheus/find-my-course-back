import { CourseService } from '@/services';
import { Request, Response } from 'express';

const courseService = new CourseService();

export class CourseController {
  async getCourses(req: Request, res: Response) {
    try {
      const data = await courseService.allCourses();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getCourse(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await courseService.findCourse(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
