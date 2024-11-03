import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./categories.service";

const createCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await CategoryService.createCategories(req.body);
        res.status(201).json({
            message: "Categories created successfully!",
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.json({
            message: "Categories retrieved successfully!",
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};

const getCategoryById = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const id = req.params.id;
        const category = await CategoryService.getCategoryById(id);
        res.json({
            message: "Category retrieved successfully!",
            data: category,
        });
    } catch (error) {
        next(error);
    }
}


const updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const id = req.params.id
        const updatedCategory = await CategoryService.updateCategory(id, req.body);
        res.json({
            message: "Category updated successfully!",
            data: updatedCategory,
        });
    } catch (error) {
        next(error);
    }
}


const deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const id = req.params.id;
        await CategoryService.deleteCategory(id);
        res.json({
            message: "Category deleted successfully!",
        });
    } catch (error) {
        next(error);
    }
}

export const CategoryController = {
    createCategories,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
}