class ClientController {
	static async create(req, res) {
		res.send("POST /client");
	}

	static async getAll(req, res) {
		res.send("GET /client");
	}

	static async getOne(req, res) {
		const { id } = req.params;
		res.send(`GET /client/${id}`);
	}

	static async update(req, res) {
		res.send("PATCH /client");
	}

	static async delete(req, res) {
		res.send("DELETE /client");
	}
}

export default ClientController;
