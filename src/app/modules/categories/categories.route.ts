import express from 'express';
import { CategoryController } from './categories.controller';
const router = express.Router();

router.post("/create-categories", CategoryController.createCategories);
router.get("/get-all-categories", CategoryController.getAllCategories);
router.get("/get-category/:id", CategoryController.getCategoryById);
router.put("/update-category/:id", CategoryController.updateCategory);
router.delete("/delete-category/:id", CategoryController.deleteCategory);

export const categoryRouter = router;