import { CategoryController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCategory } = new CategoryController();

router.get('/categorys/:id', getCategory);

export default router;
