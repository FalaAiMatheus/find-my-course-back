import { Categorys } from '@prisma/client';
import { prisma } from './prisma.service';

export class CategoryService {
  async findCategory(id: number) {
    return await prisma.categorys.findUnique({
      where: { id: id },
    });
  }
  async allCategorys(): Promise<Categorys[]> {
    return await prisma.categorys.findMany();
  }
}
