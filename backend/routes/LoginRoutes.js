import { loginUser } from "../controllers/LoginController.js";
import express from "express"

const router = express.Router();

router.post("/", loginUser);

export default router;