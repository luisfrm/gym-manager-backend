import { z } from "zod";

export const clientSchema = z.object({
	name: z.string({
		required_error: "Username is required",
		invalid_type_error: "Username must be a string",
	}),
	lastname: z.string({
		required_error: "Lastname is required",
		invalid_type_error: "Lastname must be a string",
	}),
	email: z
		.string({
			invalid_type_error: "Email must be a string",
		})
		.email({
			message: "Invalid email format",
		})
		.optional(),
	phone: z
		.string({
			invalid_type_error: "Phone number must be a string",
		})
		.optional(),
	address: z
		.string({
			invalid_type_error: "Address must be a string",
		})
		.optional(),
});
