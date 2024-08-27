import currencyModel from "../models/currency.model.js";

class CurrencyController {
	static async create(req, res) {
		try {
			const currency = new currencyModel(req.body);
			await currency.save();
			res.status(201).json(currency);
		} catch (error) {
			console.log(error);
			res.status(500).send("There was an error creating currency");
		}
	}

	static async getAll(_, res) {
		try {
			const currencies = await currencyModel.find();
			res.status(200).json(currencies);
		} catch (error) {
			console.log("There was an error getting currency:", error);
			res.status(500).send("There was an error getting currency");
		}
	}

	static async getOneCurrency(req, res) {
		try {
			const { id } = req.params;
			const currency = await currencyModel.findOne({ _id: id });

			if (!currency) return res.status(404).send("Currency not found");

			res.status(200).json(currency);
		} catch (error) {
			console.log("There was an error getting currency:", error);
			res.status(500).send("There was an error getting currency");
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const currency = await currencyModel.findOneAndUpdate(
				{ _id: id },
				req.body,
				{ new: true }
			);

			if (!currency) return res.status(404).send("Currency not found");

			res.status(200).json(currency);
		} catch (error) {
			console.log("There was an error updating currency:", error);
			res.status(500).send("There was an error updating currency");
		}
	}

	static async delete(req, res) {
		try {
			const { id } = req.params;
			const currency = await currencyModel.findOne({ _id: id });

			if (!currency) return res.status(404).send("Currency not found");

			await currencyModel.deleteOne({ _id: id });
			res.status(200).send("Currency deleted");
		} catch (error) {
			console.log("There was an error deleting currency:", error);
			res.status(500).send("There was an error deleting currency");
		}
	}
}

export default CurrencyController;