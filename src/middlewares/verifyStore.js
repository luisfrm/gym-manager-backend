import Store from "../models/store.model.js";

export const verifyStore = async (req, res, next) => {
  const { store_id } = req.headers; // Obtén store_id de los headers
  const userStoreIds = req.user.stores; // Lista de tiendas a las que el usuario tiene acceso

  // Verifica que el store_id esté en los permisos del usuario
  if (!store_id || !userStoreIds.includes(store_id)) {
    return res.status(403).send("Access forbidden: Invalid or unauthorized store ID");
  }

  // Verifica que el store_id sea válido
  const store = await Store.findById(store_id);
  if (!store) return res.status(404).send("Store not found");

  req.store_id = store_id; // Almacena el objeto store en req para usarlo en el controlador
  next();
};
