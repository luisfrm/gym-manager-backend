import StoreModel from "../models/store.model.js";

class StoreController {
  static async getStores(req, res) {
    try {
      const stores = await StoreModel.find();
      res.status(200).json(stores);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving stores.",
      });
    }
  }

  static async createStore(req, res) {
    try {
      const store = new StoreModel(req.body);
      await store.save();
      res.status(201).json(store);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while creating the Store.",
      });
    }
  }

  static async getStore(req, res) {
    const { id } = req.params;
    try {
      const store = await StoreModel.findById(id);

      if (!store) return res.status(404).send({ message: `Store with id=${id} was not found` });

      res.status(200).json(store);
    } catch (error) {
      res.status(500).send({
        message: error.message || `Error retrieving Store with id=${id}.`,
      });
      
    }
  }

  static async updateStore(req, res) {
    try {
      const { id } = req.params;
      const store = await StoreModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!store) return res.status(404).send({ message: `Store with id=${id} was not found` });

      res.status(200).json(store);
    } catch (error) {
      
    }
  }

  static async deleteStore(req, res) {
    const { id } = req.params;
    try {
      const store = await StoreModel.findByIdAndDelete(id);

      if (!store) return res.status(404).send({ message: `Store with id=${id} was not found` });

      res.status(200).send({ message: "Store was deleted successfully!" });
    } catch (error) {
      res.status(500).send({
        message: error.message || `Could not delete Store with id=${id}.`,
      });
    }
  }
}

export default StoreController;