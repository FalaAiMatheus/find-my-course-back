import { GraduationTypeService } from '@/services';
import { Request, Response } from 'express';

const graduationTypeService = new GraduationTypeService();

export class GraduationTypeController {
  async allGraduationTypes(req: Request, res: Response) {
    try {
      const data = await graduationTypeService.allGraduationType();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getGraduationType(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await graduationTypeService.findGraduationType(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
