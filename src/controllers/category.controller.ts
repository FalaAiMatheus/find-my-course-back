import { CategoryService } from '@/services';
import { Request, Response } from 'express';

const categoryService = new CategoryService();

export class CategoryController {
  async getCategorys(req: Request, res: Response) {
    try {
      const data = await categoryService.allCategorys();
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
  async getCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await categoryService.findCategory(Number(id));
      res.status(200).json(data);
    } catch (error) {
      res.send(error);
    }
  }
}
