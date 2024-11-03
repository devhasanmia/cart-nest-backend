import express from 'express';
import { CategoryController } from './categories.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './categories.validation';
const router = express.Router();

router.post("/create-categories", validateRequest(CategoryValidation.create), CategoryController.createCategories);
router.get("/get-all-categories", CategoryController.getAllCategories);
router.get("/get-category/:id", CategoryController.getCategoryById);
router.put("/update-category/:id", validateRequest(CategoryValidation.update), CategoryController.updateCategory);
router.delete("/delete-category/:id", CategoryController.deleteCategory);

export const categoryRouter = router;