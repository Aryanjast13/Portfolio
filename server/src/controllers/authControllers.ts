import bcyrpt from "bcrypt";
import { Schema, Types } from 'mongoose';
import { Request, RequestHandler, Response } from "express";

import { access_tokenOptions, generate__acceson_token } from "../jwt/generateJwt";
import { User } from "../models";
import { StatusCodes } from "../types/statusCodes";
import { credinatlsForLogin, credinatlsForResgister } from "../validation/input_validation";


interface CustomRequest extends Request {
    user?: {
        id: string;
        name: string;
        emailId: string;
    };
}

type user = {
  _id: Types.ObjectId;
  name: string;
  emailId: string;
  password: string;
};

const register: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { name, emailId, password } = req.body;
         //checking type of userInputs
    if (!credinatlsForResgister.safeParse(req.body).success) {
      res.status(StatusCodes.BadRequest).json({ success: false, message: "Invalid request body" });
      return;
    }
        //checking the existing the user
        const existingUser = await User.findOne<user>({ emailId });
        console.log(existingUser);
        if (existingUser?.emailId=== emailId) {
            res.status(StatusCodes.BadRequest).json({ success: false, message: "emailId already exists" });
            return;
        }

        //hashing the password 
        const hashedPassword = await bcyrpt.hash(password, 10);

        const user = await User.create({
            name,
            emailId,
            password:hashedPassword,
        });

        res.status(StatusCodes.Created).json({ success: true, message: "User registred successfully" });
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({ success: false, message: "Error registering the user" });
   }
   
}


const login: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { emailId, password } = req.body;
        if (!credinatlsForLogin.safeParse(req.body).success) {
            res
              .status(StatusCodes.BadRequest)
                .json({ message: "Invalid  request body" });
            return;
        }
          
        const existingUser = await User.findOne<user>({ emailId });
        console.log(existingUser);
 

        if (!existingUser) {
            res.status(StatusCodes.NotFound).json({ success: false, message: "User not exists" })
            return;
        }

        //check password
        const isPasswordCorrect = await bcyrpt.compare(password, existingUser.password)
        console.log(isPasswordCorrect);
        if (!isPasswordCorrect) {
            res.status(StatusCodes.NotFound).json({ success: false, message: "Invalid credentials" });
            
            return;
        }

        const user = {
            id: existingUser._id,
            name: existingUser.name,
        }

        const access_token = generate__acceson_token(user);
         res
           .status(StatusCodes.OK)
           .cookie("access_token", access_token, access_tokenOptions)
           .json({
             success: true,
             data: user,
             message: "Login successful",
           });

      
     }
    
    catch (error) {
        res.status(StatusCodes.InternalServerError).json({success:false,message:"Error logging in User"})
    }
    
}

const getSession: RequestHandler = async (req: Request, res: Response) => {
    res.send("done2")
}

export { getSession, login, register };

