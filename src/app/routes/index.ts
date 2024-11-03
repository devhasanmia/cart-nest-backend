import { Router } from "express";
import { productRouter } from "../modules/product/product.route";
import { categoryRouter } from "../modules/categories/categories.route";
const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: productRouter,
  },
  {
    path: "/categories",
    route: categoryRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
