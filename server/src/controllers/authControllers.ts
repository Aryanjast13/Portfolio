import bcyrpt from "bcrypt";
import { Request, RequestHandler, Response } from "express";
import { Types } from "mongoose";
import env from "../utils/env";

import {
  access_tokenOptions,
  generate__acceson_token,
} from "../jwt/generateJwt";
import { User } from "../models";
import { StatusCodes } from "../types/statusCodes";
import {
  credinatlsForLogin,
  credinatlsForResgister,
} from "../validation/input_validation";

interface CustomRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

type user = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
};

const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    //checking type of userInputs
    if (!credinatlsForResgister.safeParse(req.body).success) {
      res
        .status(StatusCodes.BadRequest)
        .json({ success: false, message: "Invalid request body" });
      return;
    }
    //checking the existing the user
    const existingUser = await User.findOne<user>({ email });
    if (existingUser?.email === email) {
      res
        .status(StatusCodes.BadRequest)
        .json({ success: false, message: "emailId already exists" });
      return;
    }

    //hashing the password
    const hashedPassword = await bcyrpt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(StatusCodes.Created)
      .json({ success: true, message: "User registred successfully" });
  } catch (error) {
    res
      .status(StatusCodes.InternalServerError)
      .json({ success: false, message: "Error registering the user" });
  }
};

const login: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!credinatlsForLogin.safeParse(req.body).success) {
      res
        .status(StatusCodes.BadRequest)
        .json({ message: "Invalid  request body" });
      return;
    }

    const existingUser = await User.findOne<user>({ email });

    if (!existingUser) {
      res
        .status(StatusCodes.NotFound)
        .json({ success: false, message: "User not exists" });
      return;
    }

    //check password
    const isPasswordCorrect = await bcyrpt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      res
        .status(StatusCodes.NotFound)
        .json({ success: false, message: "Invalid credentials" });

      return;
    }

    const user = {
      id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
    };

    const access_token = generate__acceson_token(user);
    res
      .status(StatusCodes.OK)
      .cookie("access_token", access_token, access_tokenOptions)
      .json({
        success: true,
        user: user,
        message: "Login successful",
      });
  } catch (error) {
    res
      .status(StatusCodes.InternalServerError)
      .json({ success: false, message: "Error logging in User" });
  }
};

const logout: RequestHandler = async (req: Request, res: Response) => {
  try {
    res
      .clearCookie("access_token", {
        httpOnly: true,
        secure: env.isProd,
        sameSite: env.isProd ? "none" : "lax",
        path: "/",
      })
      .status(200)
      .json({ success: true, message: "User Logged Out" });
  } catch (error) {
    res
      .status(StatusCodes.InternalServerError)
      .json({ success: false, message: "Failed to logout" });
  }
};

const getSession: RequestHandler = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const user = req.user;
    if (!user) {
      res
        .status(StatusCodes.Unauthorized)
        .json({ success: false, message: "User not Authenicated" });
      return;
    }
    res
      .status(StatusCodes.OK)
      .json({ success: true, user: user, message: "User Authenicated" });
  } catch (error) {
    res
      .status(StatusCodes.InternalServerError)
      .json({ success: false, message: "Failed to verify to user login" });
  }
};

export { getSession, login, logout, register };

