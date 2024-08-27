import { z } from "zod";

export const logsSchema = z.object({
	activity_type: z.string({
		required_error: "Activity type is required",
		invalid_type_error: "Activity type must be a string",
	}),
	description: z.string({
		required_error: "Description is required",
		invalid_type_error: "Description must be a string",
	}),
	user_id: z.string({
		required_error: "User ID is required",
		invalid_type_error: "User ID must be a string",
	}),
	details: z.record(z.unknown()),
	date: z.date({
		default: () => new Date(),
	}),
	store_id: z.string({
		required_error: "Store ID is required",
		invalid_type_error: "Store ID must be a string",
	}),
});
