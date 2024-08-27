import { z } from "zod";

export const trainerSchema = z.object({
	name: z.string({
		required_error: "Trainer name is required",
		invalid_type_error: "Trainer name must be a string",
	}),
	lastname: z.string({
		required_error: "Trainer lastname is required",
		invalid_type_error: "Trainer lastname must be a string",
	}),
	email: z.string({
		required_error: "Trainer email is required",
		invalid_type_error: "Trainer email must be a string",
	}),
	phone: z.string({
		required_error: "Trainer phone is required",
		invalid_type_error: "Trainer phone must be a string",
	}),
	address: z.string({
		required_error: "Trainer address is required",
		invalid_type_error: "Trainer address must be a string",
	}),
	store_id: z.string({
		required_error: "Store ID is required",
		invalid_type_error: "Store ID must be a string",
	}),
});
