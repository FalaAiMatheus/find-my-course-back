import { Colleges } from '@prisma/client';
import { prisma } from './prisma.service';

export class CollegeService {
  async findCollege(id: number) {
    return await prisma.colleges.findUnique({
      where: { id: id },
    });
  }
  async allColleges(): Promise<Colleges[]> {
    return await prisma.colleges.findMany();
  }
}
