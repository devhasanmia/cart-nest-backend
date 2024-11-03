import { z } from "zod";

const create = z.object({
    name: z
        .string({
            invalid_type_error: "Invalid product name",
            required_error: "Product name is required",
        })
})


const update = z.object({
    name: z
        .string({
            invalid_type_error: "Invalid product name",
            required_error: "Product name is required",
        })
        .optional(),
})


export const CategoryValidation = {
    create,
    update,
}