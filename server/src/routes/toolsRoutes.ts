import express from "express";
import { addTool, deleteTool, editTool, getTools } from "../controllers/toolsControllers";
import { uploads } from "../utils/muter";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/",authMiddleware,uploads.single('image') ,addTool);
router.get("/",authMiddleware, getTools);
router.put("/:id",authMiddleware,uploads.single('image'), editTool);
router.delete("/:id",authMiddleware,deleteTool);

export default router;
