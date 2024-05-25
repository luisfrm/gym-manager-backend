import { z } from "zod";

export const paySchema = z.object({
	amount: z.number({
		required_error: "Amount is required",
		invalid_type_error: "Amount must be a number",
	}),
	description: z.string({
		required_error: "Description is required",
		invalid_type_error: "Description must be a string",
	}),
	currency: z.string({
		required_error: "Currency is required",
		invalid_type_error: "Currency must be a string",
	}),
	payment_method: z.string({
		required_error: "Payment method is required",
		invalid_type_error: "Payment method must be a string",
	}),
	payment_type: z.string({
		required_error: "Payment type is required",
		invalid_type_error: "Payment type must be a string",
	}),
	customerId: z.string({
		required_error: "Customer ID is required",
		invalid_type_error: "Customer ID must be a string",
	}),
	storeId: z.string({
		required_error: "Store ID is required",
		invalid_type_error: "Store ID must be a string",
	}),
	status: z
		.string({
			required_error: "Status is required",
			invalid_type_error: "Status must be a string",
		})
		.default("pending"),
});
