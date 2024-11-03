// Product Create Validation

import { z } from "zod";

const create = z.object({
  name: z
    .string({
      invalid_type_error: "Invalid product name",
      required_error: "Product name is required",
    })
    .min(3, "Product name should be at least 3 characters long"),
  description: z
    .string({
      invalid_type_error: "Invalid product description",
      required_error: "Product description is required",
    })
    .min(10, "Product description should be at least 10 characters long"),
  price: z.string({
    invalid_type_error: "Invalid product price",
    required_error: "Product price is required",
  }),
  stockQuantity: z.string({
    invalid_type_error: "Invalid stock quantity",
    required_error: "Stock quantity is required",
  }),
  category: z.string({
    invalid_type_error: "Invalid product category",
    required_error: "Product category is required",
  }),
  image: z.string().optional(),
});

const update = z.object({
  name: z
    .string({
      invalid_type_error: "Invalid product name",
      required_error: "Product name is required",
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: "Invalid product description",
      required_error: "Product description is required",
    })
    .optional(),
  price: z
    .string({
      invalid_type_error: "Invalid product price",
      required_error: "Product price is required",
    })
    .optional(),
  stockQuantity: z
    .string({
      invalid_type_error: "Invalid stock quantity",
      required_error: "Stock quantity is required",
    })
    .optional(),
  category: z
    .string({
      invalid_type_error: "Invalid product category",
      required_error: "Product category is required",
    })
    .optional(),
});

export const productValidation = {
  create,
  update,
};
