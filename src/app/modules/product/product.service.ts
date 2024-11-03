import { sendImageToCloudinary } from "../../utils/sendImage";
import { TProduct } from "./product.interface";
import productModel from "./product.model";

// Add product Start
const addProduct = async (image: string, payload: TProduct) => {
  try {
    const res = await sendImageToCloudinary(image);
    payload.image = res.secure_url;
    const product = await productModel.create(payload);
    return product;
  } catch (error) {
    throw new Error("Failed to add product.");
  }
};
// Add product End

// Get all products Start
const getAllProducts = async () => {
  try {
    const products = await productModel.find({}).sort({ updatedAt: -1 });
    return products;
  } catch (error) {
    throw new Error("Failed to get products.");
  }
};
// Get all products End

// Get product by ID Start

const getProductById = async (productId: string) => {
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error("Product not found.");
    }
    return product;
  } catch (error) {
    throw new Error("Failed to get product.");
  }
};
// Get Product By ID End

// Update product Start

const updateProduct = async (productId: string, payload: TProduct) => {
  try {
    console.log(payload, productId)
    const product = await productModel.findByIdAndUpdate(productId, payload, { new: true });
    if (!product) {
      throw new Error("Product not found.");
    }
    return product;
  } catch (error) {
    throw new Error("Failed to update product.");
  }
};

// Delete product Start
const deleteProduct = async (productId: string) => {
  try {
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
      throw new Error("Product not found.");
    }
    return product;
  } catch (error) {
    throw new Error("Failed to delete product.");
  }
};
// Delete product End

// Multiple Product Delete Start

const deleteMultipleProducts = async (productIds: string[]) => {
  try {
    const products = await productModel.deleteMany({ _id: { $in: productIds } });
    if (products.deletedCount === 0) {
      throw new Error("No products found with given IDs.");
    }
    return products;
  } catch (error) {
    throw new Error("Failed to delete products.");
  }
};

// Multiple Product Delete End

export const ProductService = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts
};
