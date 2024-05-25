class ClientController {
  static async create(req, res) {
    res.send("POST /client");
  }

  static async read(req, res) {
    res.send("GET /client");
  }

  static async update(req, res) {
    res.send("PATCH /client");
  }

  static async delete(req, res) {
    res.send("DELETE /client");
  }
}

export default ClientController;