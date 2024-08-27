import PaymentModel from "../models/payment.model.js";

class PaymentController {
	static async create(req, res) {
		try {
			const { store_id } = req;
			const payment = new PaymentModel({ ...req.body, store_id });
			await payment.save();
			res.status(201).json(payment);
		} catch (error) {
			console.log(error);
			res.status(500).send("There was an error creating payment");
		}
	}

	static async getAll(_, res) {
		try {
			const { store_id } = req;
			const payments = await PaymentModel.find({ store_id }).populate("client_id");
			res.status(200).json(payments);
		} catch (error) {
			console.log("There was an error getting payment:", error);
			res.status(500).send("There was an error getting payment");
		}
	}

	static async getPending(_, res) {
		try {
			const payments = await PaymentModel.find({ store_id, status: "Pending" }).populate("client_id");
			res.status(200).json(payments);
		} catch (error) {
			console.log("There was an error getting payment:", error);
			res.status(500).send("There was an error getting payment");
		}
	}

	static async getPaymentsByClient(req, res) {
		try {
			const { client_id } = req.params;
			const payments = await PaymentModel.find({ store_id, client_id });
			res.status(200).json(payments);
		} catch (error) {
			console.log("There was an error getting payment:", error);
			res.status(500).send("There was an error getting payment");
		}
	}

	static async getOnePayment(req, res) {
		try {
			const { id } = req.params;
			const payment = await PaymentModel.findOne({ _id: id }).populate(
				"client_id"
			);

			if (!payment) return res.status(404).send("Payment not found");

			res.status(200).json(payment);
		} catch (error) {
			console.log("There was an error getting payment:", error);
			res.status(500).send("There was an error getting payment");
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const payment = await PaymentModel.findOneAndUpdate(
				{ _id: id, store_id },
				req.body,
				{
					new: true,
					runValidators: true,
				}
			);

			if (!payment) return res.status(404).send("Payment not found");

			res.status(200).json(payment);
		} catch (error) {
			console.log("There was an error updating payment:", error);
			res.status(500).send("There was an error updating payment");
		}
	}

	static async delete(req, res) {
		const { id } = req.params;
		try {
			const payment = await PaymentModel.findOneAndDelete({ _id: id, store_id });

			if (!payment) return res.status(404).send("Payment not found");

			res.status(200).send("Payment deleted", payment);
		} catch (error) {
			res.status(500).send("There was an error deleting payment");
		}
	}
}

export default PaymentController;
