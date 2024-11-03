import { Request, Response, NextFunction } from "express";
import { ProductService } from "./product.service";
import { TProduct } from "./product.interface";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const image = req.file?.path ?? "";
    const product = await ProductService.addProduct(image, req.body);
    res.status(201).json({
      message: "Product added successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json({
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await ProductService.getProductById(productId);
    res.json({
      message: "Product retrieved successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const updatedProductData: TProduct = req.body;
    console.log(productId, updatedProductData)
    const updatedProduct = await ProductService.updateProduct(
      productId,
      updatedProductData
    );
    res.json({
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    await ProductService.deleteProduct(productId);
    res.json({
      message: "Product deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
// Multipule Product Delete
const deleteMultipleProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productIds = req.body.productIds;
    await ProductService.deleteMultipleProducts(productIds);
    res.json({
      message: "Products deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const ProductController = {
  addProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts,
};

export default ProductController;
