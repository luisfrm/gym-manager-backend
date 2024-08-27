import LogsModel from "../models/logs.model.js";

class LogsController {
  // Crear un nuevo log
  static async create(req, res) {
    try {
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware

      // Incluye el store_id en los datos del log
      const logData = { ...req.body, store_id };

      const log = new LogsModel(logData);
      await log.save();
      res.status(201).json(log);
    } catch (error) {
      console.log(error);
      res.status(500).send("There was an error creating log");
    }
  }

  // Obtener todos los logs de la tienda
  static async getAll(req, res) {
    try {
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware

      // Filtra los logs por store_id
      const logs = await LogsModel.find({ store_id });
      res.status(200).json(logs);
    } catch (error) {
      console.log("There was an error getting logs:", error);
      res.status(500).send("There was an error getting logs");
    }
  }

  // Obtener logs recientes de la tienda
  static async getRecentsLogs(req, res) {
    try {
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware
      const logsQuantity = req.query.quantity || 6;

      // Filtra los logs recientes por store_id
      const logs = await LogsModel.find({ store_id })
        .sort({ createdAt: -1 })
        .limit(Number(logsQuantity));
      res.status(200).json(logs);
    } catch (error) {
      console.log("There was an error getting recent logs:", error);
      res.status(500).send("There was an error getting recent logs");
    }
  }

  // Obtener un log específico de la tienda
  static async getOneLog(req, res) {
    try {
      const { id } = req.params;
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware

      // Busca un log específico por id y store_id
      const log = await LogsModel.findOne({ _id: id, store_id });

      if (!log) return res.status(404).send("Log not found");

      res.status(200).json(log);
    } catch (error) {
      console.log("There was an error getting log:", error);
      res.status(500).send("There was an error getting log");
    }
  }

  // Actualizar un log específico de la tienda
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware

      // Actualiza un log específico por id y store_id
      const log = await LogsModel.findOneAndUpdate(
        { _id: id, store_id },
        req.body,
        { new: true, runValidators: true }
      );

      if (!log) return res.status(404).send("Log not found");

      res.status(200).json(log);
    } catch (error) {
      console.log("There was an error updating log:", error);
      res.status(500).send("There was an error updating log");
    }
  }

  // Eliminar un log específico de la tienda
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const { store_id } = req; // Usa req.store_id que fue establecido por el middleware

      // Elimina un log específico por id y store_id
      const log = await LogsModel.findOne({ _id: id, store_id });

      if (!log) return res.status(404).send("Log not found");

      await LogsModel.deleteOne({ _id: id, store_id });
      res.status(204).send();
    } catch (error) {
      console.log("There was an error deleting log:", error);
      res.status(500).send("There was an error deleting log");
    }
  }
}

export default LogsController;
