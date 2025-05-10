import express from "express";
import {
  addProject,
  deleteProject,
  editProject,
  getProjects,
} from "../controllers/projectControllers";
import { uploads } from "../utils/muter";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware,uploads.single("image"), addProject);
router.get("/", authMiddleware,getProjects);
router.put("/:id", authMiddleware,uploads.single("image"), editProject);
router.delete("/:id",authMiddleware ,deleteProject);

export default router;
