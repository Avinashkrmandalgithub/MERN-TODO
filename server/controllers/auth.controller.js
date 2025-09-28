import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// signup
async function register(req, res) {
  try {
    const { email, username, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.toLowerCase();
    const isUserAlreadyExists = await UserModel.findOne({
      email: normalizedEmail,
    });

    if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      email: normalizedEmail,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true only in prod
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // lax works on localhost
});


    res.status(200).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

// login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }
    const normalizedEmail = email.toLowerCase();
    const user = await UserModel.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true only in prod
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // lax works on localhost
});


    res.status(200).json({
      message: "User logged In successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });

  }
}

async function logout(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "logged out successfully"
  })
}

async function getUser(req, res) {
  try {
    // authMiddleware already attaches user to req
    const user = req.user;
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}


export default {
  register,
  login,
  logout,
  getUser,
};
