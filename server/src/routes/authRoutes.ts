import express, { Request, Response } from "express";
import { getSession, login, register } from "../controllers/authControllers";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/get-session", getSession);


export default router;
