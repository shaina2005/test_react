import express from "express";
import { getAllRoom, newRoom } from "../controllers/BookroomController.js";

const router = express.Router();

router.post("/", newRoom);
router.get("/:email", getAllRoom);

export default router;
