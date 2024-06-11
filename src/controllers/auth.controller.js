import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateJwt } from "../utils/jwt.js";
import { TOKEN_SECRET_JWT } from "../config.js";

class AuthController {
	static async register(req, res) {
		const { username, email, password } = req.body;

		try {
			const userFoundByEmail = await userModel.findOne({
				email,
			});

			if (userFoundByEmail)
				return res.status(400).json({ message: "Email already exists" });

			const userFoundByUsername = await userModel.findOne({
				username,
			});

			if (userFoundByUsername)
				return res.status(400).json({ message: "Username already exists" });

			const passwordHash = await bcrypt.hash(password, 10);

			const newUser = new userModel({
				username,
				email,
				password: passwordHash,
			});

			const userSaved = await newUser.save();
			const token = await generateJwt({ id: userSaved._id });
			res.cookie("token", token);
			res.status(201).json({
				id: userSaved._id,
				username: userSaved.username,
				email: userSaved.email,
				createdAt: userSaved.createdAt,
				updatedAt: userSaved.updatedAt,
			});
		} catch (error) {
			console.log(error);

			if (error.code === 11000) {
				if (error.keyValue.username)
					return res.status(400).send("Username already in use.");

				return res.status(400).send("Email already in use.");
			}

			res.status(500).send("Error registering new user.");
		}
	}

	static async login(req, res) {
		const { email, password } = req.body;

		try {
			const userFound = await userModel.findOne({ email });

			if (!userFound) return res.status(404).json({ message: ["User not found."] });

			const isPasswordMatch = await bcrypt.compare(password, userFound.password);

			if (!isPasswordMatch) return res.status(400).json({ message: ["Invalid credentials."] });

			const token = await generateJwt({ id: userFound._id });
			res.cookie("token", token);
			res.status(200).json({
				id: userFound._id,
				username: userFound.username,
				email: userFound.email,
				createdAt: userFound.createdAt,
				updatedAt: userFound.updatedAt,
			});
		} catch (error) {
			console.log(error);
			res.status(500).send("Error login into the system.");
		}
	}

	static async logout(req, res) {
		res.cookie("token", "", { expires: new Date(0) });
		res.status(200).send("User logged out.");
	}

	static async profile(req, res) {
		const user = req.user;

		try {
			const userFound = await userModel.findById(user.id);

			if (!userFound) return res.status(404).json({ message: ["User not found."] });

			res.status(200).json({
				id: userFound._id,
				username: userFound.username,
				email: userFound.email,
				createdAt: userFound.createdAt,
				updatedAt: userFound.updatedAt,
			});
		} catch (error) {
			console.log(error);
			res.status(500).send("Error getting user profile.");
		}
	}

	static removeProfile = async (req, res) => {
		const user = await userModel.findByIdAndDelete(req.user.id);
		if (!user) return res.status(404).json({ message: ["User not found."] });

		res.status(200).send("User deleted.");
	};
}

export default AuthController;
