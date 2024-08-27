import { z } from "zod";

export const loginSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
			invalid_type_error: "Email must be a string",
		})
		.email({
			message: "Invalid email format",
		}),
	password: z
		.string({
			required_error: "Password is required",
			invalid_type_error: "Password must be a string",
		})
		.min(6, {
			message: "Password must be at least 6 characters",
		}),
});

export const registerSchema = z.object({
	username: z
		.string({
			required_error: "Username is required",
			invalid_type_error: "Username must be a string",
		})
		.min(3, {
			message: "Username must be at least 3 characters long",
		}),
	email: z
		.string({
			required_error: "Email is required",
			invalid_type_error: "Email must be a string",
		})
		.email({
			message: "Invalid email address.",
		}),
	password: z
		.string({
			required_error: "Password is required",
			invalid_type_error: "Password must be a string",
		})
		.min(6, {
			message: "Password must be at least 6 characters long",
		}),
	stores: z.array(z.string()).optional(), // Array of store ids
});
