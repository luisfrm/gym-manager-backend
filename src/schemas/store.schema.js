import { z } from "zod";

export const storeSchema = z.object({
	name: z.string({
		required_error: "Store name is required",
		invalid_type_error: "Store name must be a string",
	}),
	location: z.string({
		required_error: "Store location is required",
		invalid_type_error: "Store location must be a string",
	}),
	phone: z.string({
		required_error: "Store phone number is required",
		invalid_type_error: "Store phone number must be a string",
	}),
	email: z
		.string({
			required_error: "Store email is required",
			invalid_type_error: "Store email must be a string",
		})
		.email({
			message: "Invalid email format",
		}),
	website: z
		.string({
			required_error: "Store website is required",
			invalid_type_error: "Store website must be a string",
		})
		.optional(),
	logo: z
		.string({
			required_error: "Store logo is required",
			invalid_type_error: "Store logo must be a string",
		})
		.optional(),
	hours: z
		.object({
			open: z.string({
				required_error: "Store open hours are required",
				invalid_type_error: "Store open hours must be a string",
			}),
			closed: z.string({
				required_error: "Store close hours are required",
				invalid_type_error: "Store close hours must be a string",
			}),
		})
		.optional(),
});
