import { CourseArea } from '@prisma/client';
import { prisma } from './prisma.service';

export class CourseAreaService {
  async findArea(id: number) {
    return await prisma.courseArea.findUnique({
      where: { id: id },
    });
  }
  async allArea(): Promise<CourseArea[]> {
    return await prisma.courseArea.findMany();
  }
}
