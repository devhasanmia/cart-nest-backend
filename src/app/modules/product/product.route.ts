import express from "express";
import ProductController from "./product.controller";
import upload from "../../utils/sendImage";
import validateRequest from "../../middlewares/validateRequest";
import { productValidation } from "./product.validation";
const router = express.Router();

router.post(
  "/add-product",
  upload.single("image"),
  validateRequest(productValidation.create),
  ProductController.addProduct
);
router.get("/get-all-products", ProductController.getAllProduct);
router.get("/get-product/:id", ProductController.getProductById);
router.put(
  "/update-product/:id",
  validateRequest(productValidation.update),
  ProductController.updateProduct
);
router.delete("/delete-product/:id", ProductController.deleteProduct);
router.delete(
  "/delete-multiple-products",
  ProductController.deleteMultipleProducts
);
export const productRouter = router;
