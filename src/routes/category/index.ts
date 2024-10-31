import { CategoryController } from '@/controllers';
import express from 'express';

const router = express.Router();
const { getCategory, getCategorys } = new CategoryController();

router.get('/categorys/:id', getCategory);
router.get('/categorys', getCategorys);

export default router;
