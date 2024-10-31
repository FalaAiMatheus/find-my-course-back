import { TeachingModality } from '@prisma/client';
import { prisma } from './prisma.service';

export class TeachingModalityService {
  async findTeachingModality(id: number) {
    return await prisma.teachingModality.findUnique({
      where: { id: id },
    });
  }
  async allModalitys(): Promise<TeachingModality[]> {
    return await prisma.teachingModality.findMany();
  }
}
