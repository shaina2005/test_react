import express from "express"
import { createUser } from "../controllers/RegisterController.js"

const router = express.Router()

router.post("/", createUser);

export default router;