import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function authMiddleware(req, res, next) {
  const token = req.cookies?.token; 

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id).select("-password"); 
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default authMiddleware;
