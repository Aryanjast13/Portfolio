import express from "express";
import {
  addProject,
  deleteProject,
  editProject,
  getProjects,
} from "../controllers/projectControllers";
import authMiddleware from "../middlewares/authMiddleware";
import { uploads } from "../utils/mutler";

const router = express.Router();

router.post("/", authMiddleware,uploads.single("image"), addProject);
router.get("/", authMiddleware,getProjects);
router.put("/:id", authMiddleware,uploads.single("image"), editProject);
router.delete("/:id",authMiddleware ,deleteProject);

export default router;
