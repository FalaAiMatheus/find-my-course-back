import { TeachingModalityService } from '@/services';
import { Request, Response } from 'express';

const teachingModalityService = new TeachingModalityService();

export class TeachingModalityController {
  async allModalitys(req: Request, res: Response) {
    try {
      const data = await teachingModalityService.allModalitys();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getModalitys(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await teachingModalityService.findTeachingModality(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
