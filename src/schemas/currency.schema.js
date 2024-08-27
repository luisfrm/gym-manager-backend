import {z} from "zod";

export const currencySchema = z.object({
    name: z.string({
        required_error: "Currency name is required",
        invalid_type_error: "Currency name must be a string",
    }),
    symbol: z.string({
        required_error: "Currency symbol is required",
        invalid_type_error: "Currency symbol must be a string",
    }),
    code: z.string({
        required_error: "Currency code is required",
        invalid_type_error: "Currency code must be a string",
    }),
});