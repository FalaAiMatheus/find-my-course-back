import { GraduationType } from '@prisma/client';
import { prisma } from './prisma.service';

export class GraduationTypeService {
  async findGraduationType(id: number) {
    return await prisma.graduationType.findUnique({
      where: { id: id },
    });
  }
  async allGraduationType(): Promise<GraduationType[]> {
    return await prisma.graduationType.findMany();
  }
}
