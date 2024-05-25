class StoreController {
  static async getStores(req, res) {
    res.send("GET /stores");
  }

  static async createStore(req, res) {
    res.send("POST /stores");
  }

  static async getStore(req, res) {
    const { id } = req.params;
    res.send(`GET /stores/${id}`);
  }

  static async updateStore(req, res) {
    res.send("PATCH /stores/:id");
  }

  static async deleteStore(req, res) {
    res.send("DELETE /stores/:id");
  }
}

export default StoreController;