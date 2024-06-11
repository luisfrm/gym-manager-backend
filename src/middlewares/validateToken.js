import jwt from "jsonwebtoken";
import { TOKEN_SECRET_JWT } from "../config.js";

export const authRequired = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    jwt.verify(token, TOKEN_SECRET_JWT, (err, user) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });
      req.user = user;
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  next();
}