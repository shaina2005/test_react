import Register from "../models/Register.js";
import bcrypt from "bcrypt";
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });

    if (user) {
      if (await bcrypt.compare(password, user.hashedPassword)) {
        res.status(200).json({
          message: "Login successfull",
          user,
          color: "green",
          success: "true",
        });
      } else {
        res.status(200).json({
          message: "Invalid password",
          color: "red",
          success: "false",
        });
      }
    } else {
      res
        .status(404)
        .json({
          message: "User doesn't Exist",
          color: "red",
          success: "false",
        });
    }
  } catch (error) {
    console.log("Error in backend Loginuser : ", error.message);
    res
      .status(500)
      .json({ message: "Login failed . Try again later", color: "false", success: "false" });
  }
};
