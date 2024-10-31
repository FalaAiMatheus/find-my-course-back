import { CategoryController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCategorys } = new CategoryController();

router.get('/categorys', getCategorys);

export default router;
