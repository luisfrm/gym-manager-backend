import jwt from "jsonwebtoken";
import { TOKEN_SECRET_JWT } from "../config.js";
import getToken from "../utils/getToken.js";

export const authRequired = (req, res, next) => {
	// Extract the token
	const token = getToken(req);
	if (!token) return res.status(401).json({ message: "Unauthorized" });

	try {
		jwt.verify(token, TOKEN_SECRET_JWT, (err, user) => {
			if (err) return res.status(401).json({ message: "Unauthorized" });
			req.user = user; // Asigna el usuario decodificado al req.user
			next();
		});
	} catch (error) {
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
