import { CourseAreaService } from '@/services';
import { Request, Response } from 'express';

const courseAreaService = new CourseAreaService();

export class CourseAreaController {
  async getAllAreas(req: Request, res: Response) {
    try {
      const data = await courseAreaService.allArea();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getArea(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await courseAreaService.findArea(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
