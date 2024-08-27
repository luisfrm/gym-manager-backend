import { z } from "zod";

export const serviceSchema = z.object({
	type: z.string({
		required_error: "Service type is required",
		invalid_type_error: "Service type must be a string",
	}),
	quantity: z.number({
		required_error: "Service quantity is required",
		invalid_type_error: "Service quantity must be a number",
	}),
	price: z.number({
		required_error: "Service price is required",
		invalid_type_error: "Service price must be a number",
	}),
	store_id: z.string({
		required_error: "Store ID is required",
		invalid_type_error: "Store ID must be a string",
	}),
});
