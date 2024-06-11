import jwt from "jsonwebtoken";
import { TOKEN_SECRET_JWT, TIME_TOKEN_EXPIRATION } from "../config.js";

export const generateJwt = (payload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			TOKEN_SECRET_JWT,
			{
				expiresIn: TIME_TOKEN_EXPIRATION,
			},
			(err, token) => {
				if (err) {
					reject("Could not generate token");
				}
				resolve(token);
			}
		);
	});
};
