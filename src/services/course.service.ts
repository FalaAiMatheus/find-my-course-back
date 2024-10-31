import { Courses } from '@prisma/client';
import { prisma } from './prisma.service';

export class CourseService {
  async findCourse(id: number) {
    return await prisma.courses.findUnique({
      where: { id: id },
    });
  }
  async allCourses(): Promise<Courses[]> {
    return await prisma.courses.findMany();
  }
}
