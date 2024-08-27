import { z } from "zod";

export const paymentSchema = z.object({
	client_id: z.string({
		required_error: "Client ID is required",
		invalid_type_error: "Client ID must be a string",
	}),
	service_id: z.string({
		required_error: "Service ID is required",
		invalid_type_error: "Service ID must be a string",
	}),
	amount: z.number({
		required_error: "Payment amount is required",
		invalid_type_error: "Payment amount must be a number",
	}),
	currency_id: z.string({
		required_error: "Currency ID is required",
		invalid_type_error: "Currency ID must be a string",
	}),
	payment_method: z.string({
		required_error: "Payment method is required",
		invalid_type_error: "Payment method must be a string",
	}),
	status: z.enum(["Pending", "Completed", "Refused"], {
		default: "Pending",
	}),
	date: z.date({
		default: () => new Date(),
	}),
});
