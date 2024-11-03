import { TCategories } from "./categories.interface"
import Category from "./categories.model";

const createCategories = async (categoryData: TCategories) => {
    try {
        const category = await Category.create(categoryData);
        return category;
    } catch (error) {
        throw new Error("Failed to create category.");
    }
}

const getAllCategories = async () => {
    try {
        const categories = await Category.find({}).sort({ updatedAt: -1 });
        return categories;
    } catch (error) {
        throw new Error("Failed to get all categories.");
    }
};


const getCategoryById = async (id: string) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error("Category not found.");
        }
        return category;
    } catch (error) {
        throw new Error("Failed to get category.");
    }
}


const updateCategory = async (id: string, payload: TCategories) => {
    try {
        const category = await Category.findByIdAndUpdate(id, payload, { new: true });
        if (!category) {
            throw new Error("Category not found.");
        }
        return category;
    } catch (error) {
        throw new Error("Failed to delete category.");
    }
}


const deleteCategory = async (id: string) => {
    try {
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            throw new Error("Category not found.");
        }
        return category;
    } catch (error) {
        throw new Error("Failed to delete category.");
    }
}




export const CategoryService = {
    createCategories,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
}