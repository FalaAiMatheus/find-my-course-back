import categoryRoutes from '@/routes/category';
import collegeRoutes from '@/routes/college';
import courseRoutes from '@/routes/course';
import areaRoutes from '@/routes/course-area';
import graduationTypeRoutes from '@/routes/graduation-type';
import streetRoutes from '@/routes/street';
import teachingModalityRoutes from '@/routes/teaching-modality';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(categoryRoutes);
app.use(collegeRoutes);
app.use(courseRoutes);
app.use(streetRoutes);
app.use(areaRoutes);
app.use(graduationTypeRoutes);
app.use(teachingModalityRoutes);

app.listen(process.env.PORT, () => {
  return `HTTPS Server is running on port: ${process.env.PORT}`;
});
