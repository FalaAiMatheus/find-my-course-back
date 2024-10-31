import { StreetService } from '@/services';
import { Request, Response } from 'express';

const streetService = new StreetService();

export class StreetController {
  async getStreets(req: Request, res: Response) {
    try {
      const data = await streetService.allStreets();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getStreet(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await streetService.findStreet(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
