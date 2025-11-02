import Register from "../models/Register.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      res.status(200).json({
        message: "All fields are required",
        color: "rgba(230, 186, 28, 1)",
        success: "false",
      });
    }
    const exists = await Register.findOne({ email });
    if (exists) {
      res.status(200).json({
        message: "User already exists. Try new email",
        color: "red",
        success: "false",
      });
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newUser = await Register.create({ email, name, hashedPassword });
    res.status(200).json({
      message: "Registeration successfully!",
      color: "green",
      success: "true",
    });
  } catch (error) {
    console.log("Error in createUser backend : ", error.message);
    res.status(500).json({ message: "Error Registering user" });
  }
};
