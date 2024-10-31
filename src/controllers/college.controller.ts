import { CollegeService } from '@/services';
import { Request, Response } from 'express';

const collegeService = new CollegeService();

export class CollegeController {
  async getColleges(req: Request, res: Response) {
    try {
      const data = await collegeService.allColleges();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
