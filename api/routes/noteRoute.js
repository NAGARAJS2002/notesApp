import express from "express";
import { createNote } from "../controllers/NoteController.js";
import { verifyToken } from "../utils/verifyUser.js";


const router = express.Router();

router.post('/add',verifyToken,createNote)

export default router;
