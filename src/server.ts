import getCollege from '@/routes/college/get-college';
import getColleges from '@/routes/college/get-colleges';
import getCategory from '@/routes/category/get-category';
import getCategorys from '@/routes/category/get-categorys';
import getStreet from '@/routes/street/get-street';
import getStreets from '@/routes/street/get-streets';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(getColleges);
app.use(getCollege);
app.use(getCategory);
app.use(getCategorys);
app.use(getStreet);
app.use(getStreets);

app.listen(process.env.PORT, () => {
  return `HTTPS Server is running on port: ${process.env.PORT}`;
});
