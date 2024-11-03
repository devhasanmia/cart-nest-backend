import { Schema, model } from "mongoose";
import { TCategories } from "./categories.interface";

const categorySchema = new Schema<TCategories>({
    name: { type: String, required: true },
}, { timestamps: true });


const Category = model("Category", categorySchema);
export default Category;