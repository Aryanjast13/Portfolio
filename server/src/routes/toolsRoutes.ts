import express from "express";
import {
  addTool,
  deleteTool,
  editTool,
  getTools,
} from "../controllers/toolsControllers";
import authMiddleware from "../middlewares/authMiddleware";
import { uploads } from "../utils/mutler";

const router = express.Router();

router.post("/",authMiddleware,uploads.single('image') ,addTool);
router.get("/",authMiddleware, getTools);
router.put("/:id",authMiddleware,uploads.single('image'), editTool);
router.delete("/:id",authMiddleware,deleteTool);

export default router;
