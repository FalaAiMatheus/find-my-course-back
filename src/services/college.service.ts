import { Colleges } from '@prisma/client';
import { prisma } from './prisma.service';

export class CollegeService {
  async findCollege(id: number) {
    return await prisma.colleges.findUnique({
      where: { id: id },
    });
  }
  async findCollegeByCategory(category_id: number) {
    return await prisma.colleges.findMany({
      where: { category_id: category_id },
    });
  }
  async allColleges(): Promise<Colleges[]> {
    return await prisma.colleges.findMany();
  }
}
