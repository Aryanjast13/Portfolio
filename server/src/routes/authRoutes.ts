import express from "express";
import {
  getSession,
  login,
  logout,
  register,
} from "../controllers/authControllers";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);

router.get("/get-session", authMiddleware, getSession);

export default router;
