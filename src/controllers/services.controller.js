import ServicesModel from "../models/services.model.js";

class ServicesController {
	static async create(req, res) {
		try {
			const { store_id } = req;
			const service = new ServicesModel({ ...req.body, store_id });
			await service.save();
			res.status(201).json(service);
		} catch (error) {
			console.log(error);
			res.status(500).send("There was an error creating service");
		}
	}

	static async getAll(_, res) {
		try {
			const { store_id } = req;
			const services = await ServicesModel.find({ store_id });
			res.status(200).json(services);
		} catch (error) {
			console.log("There was an error getting service:", error);
			res.status(500).send("There was an error getting service");
		}
	}

	static async getOneService(req, res) {
		try {
			const { id } = req.params;
			const service = await ServicesModel.findOne({ _id: id, store_id });

			if (!service) return res.status(404).send("Service not found");

			res.status(200).json(service);
		} catch (error) {
			console.log("There was an error getting service:", error);
			res.status(500).send("There was an error getting service");
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const service = await ServicesModel.findOneAndUpdate(
				{ _id: id },
				req.body,
				{
					new: true,
				}
			);

			if (!service) return res.status(404).send("Service not found");

			res.status(200).json(service);
		} catch (error) {
			console.log("There was an error updating service:", error);
			res.status(500).send("There was an error updating service");
		}
	}

	static async delete(req, res) {
		try {
			const { id } = req.params;
			const service = await ServicesModel.findOne({
				_id: id,
			});

			if (!service) return res.status(404).send("Service not found");

			await ServicesModel.deleteOne({
				_id: id,
			});
			res.status(200).send("Service deleted");
		} catch (error) {
			console.log("There was an error deleting service:", error);
			res.status(500).send("There was an error deleting service");
		}
	}
}

export default ServicesController;
