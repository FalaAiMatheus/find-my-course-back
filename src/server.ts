import categoryRoutes from '@/routes/category';
import collegeRoutes from '@/routes/college';
import areaRoutes from '@/routes/course-area';
import courseRoutes from '@/routes/course';
import streetRoutes from '@/routes/street';
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

app.listen(process.env.PORT, () => {
  return `HTTPS Server is running on port: ${process.env.PORT}`;
});
