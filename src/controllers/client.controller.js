import ClientModel from "../models/client.model.js";

class ClientController {
	static async create(req, res) {
		try {
			const client = new ClientModel(req.body);
			await client.save();
			res.status(201).json(client);
		} catch (error) {
			console.log(error);
			res.status(500).send("There was an error creating client");
		}
	}

	static async getAll(_, res) {
		try {
			const clients = await ClientModel.find();
			res.status(200).json(clients);
		} catch (error) {
			console.log("There was an error getting client:", error);
			res.status(500).send("There was an error getting client");
		}
	}

	static async getOne(req, res) {
		try {
			const { id } = req.params;
			const client = await ClientModel.findOne({ _id: id });

			if (!client) return res.status(404).send("Client not found");

			res.status(200).json(client);
		} catch (error) {
			console.log("There was an error getting client:", error);
			res.status(500).send("There was an error getting client");
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const client = await ClientModel.findOneAndUpdate({ _id: id }, req.body, {
				new: true,
				runValidators: true,
			});

			if (!client) return res.status(404).send("Client not found");

			res.status(200).json(client);
		} catch (error) {
			console.log("There was an error updating client:", error);
			res.status(500).send("There was an error updating client");
		}
	}

	static async delete(req, res) {
		const { id } = req.params;
		try {
			const client = await ClientModel.findOneAndDelete({ _id: id });

			if (!client) return res.status(404).send("Client not found");

			res.status(200).send("Client deleted", client);
		} catch (error) {
			res.status(500).send("There was an error deleting client");
		}
	}
}

export default ClientController;
