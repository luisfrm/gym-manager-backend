import TrainerModel from "../models/trainer.model.js";

class TrainerController {
	static async create(req, res) {
		try {
			const store_id = req.store_id;
			const trainer = new TrainerModel({ ...req.body, store_id });
			await trainer.save();
			res.status(201).json(trainer);
		} catch (error) {
			console.log(error);
			res.status(500).send("There was an error creating trainer");
		}
	}

	static async getAll(req, res) {
		try {
			const store_id = req.store_id;
			const trainers = await TrainerModel.find({ store_id });
			res.status(200).json(trainers);
		} catch (error) {
			console.log("There was an error getting trainer:", error);
			res.status(500).send("There was an error getting trainer");
		}
	}

	static async getOneTrainer(req, res) {
		try {
			const { id } = req.params;
			const trainer = await TrainerModel.findOne({
				_id: id,
			});

			if (!trainer) return res.status(404).send("Trainer not found");

			res.status(200).json(trainer);
		} catch (error) {
			console.log("There was an error getting trainer:", error);
			res.status(500).send("There was an error getting trainer");
		}
	}

	static async update(req, res) {
		try {
			const { id } = req.params;
			const trainer = await TrainerModel.findOneAndUpdate(
				{
					_id: id,
				},
				req.body,
				{
					new: true,
				}
			);

			if (!trainer) return res.status(404).send("Trainer not found");

			res.status(200).json(trainer);
		} catch (error) {
			console.log("There was an error updating trainer:", error);
			res.status(500).send("There was an error updating trainer");
		}
	}

	static async delete(req, res) {
		try {
			const { id } = req.params;
			const trainer = await TrainerModel.findOne({
				_id: id,
			});

			if (!trainer) return res.status(404).send("Trainer not found");

			await TrainerModel.deleteOne({
				_id: id,
			});
			res.status(200).send("Trainer deleted");
		} catch (error) {
			console.log("There was an error deleting trainer:", error);
			res.status(500).send("There was an error deleting trainer");
		}
	}
}

export default TrainerController;
