import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";
import { string } from "zod";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  description: {
    type: String,
    required: [true, "Product description is required."],
  },
  price: {
    type: String,
    required: [true, "Product price is required."],
  },
  stockQuantity: {
    type: String,
    required: [true, "Stock quantity is required."],
  },
  category: {
    type: String,
    required: [true, "Product category is required."],
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/deicntkum/image/upload/v1730381686/default_zhxifw.png"
  },
});
  
export default model<TProduct>("Product", productSchema);
