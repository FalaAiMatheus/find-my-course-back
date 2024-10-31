import { Streets } from '@prisma/client';
import { prisma } from './prisma.service';

export class StreetService {
  async findStreet(id: number) {
    return await prisma.streets.findUnique({
      where: { id: id },
    });
  }
  async allStreets(): Promise<Streets[]> {
    return await prisma.streets.findMany();
  }
}
