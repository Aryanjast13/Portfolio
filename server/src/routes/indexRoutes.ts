import express from "express";
import projectRouter from "./projectRoutes"
import authRouter from "./authRoutes"
import toolRouter from "./toolsRoutes"

const router = express.Router();

router.use("/auth", authRouter);
router.use("/tool", toolRouter);
router.use("/project", projectRouter);


export default router;


