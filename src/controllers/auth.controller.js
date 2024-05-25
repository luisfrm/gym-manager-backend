class AuthController {
	static async login(req, res) {
		res.send("POST /login");
	}

	static async register(req, res) {
		res.send("POST /register");
	}

	static async logout(req, res) {
		res.send("POST /logout");
	}

	static async profile(req, res) {
		res.send("GET /me");
	}
}

export default AuthController;
