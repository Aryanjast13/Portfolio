import { NextFunction, RequestHandler, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models";
import { StatusCodes } from "../types/statusCodes";
import env from "../utils/env"

export interface CustomRequest extends Request {
    user?: {
        id: string,
        name:string
     }
}


const authMiddleware: RequestHandler = async (req: CustomRequest, res: Response, next: NextFunction) => {
    
   
        const token = req.cookies.access_token;
       
        if (!token) {
            res.status(StatusCodes.Unauthorized).json({ success: false, message: "Unauthorized : No token provided" });
            return;
        }
  
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
        if (!decoded.user) {
            res.status(StatusCodes.Unauthorized).json({ success: false, message: "Unauthorized :Invaild Token" });
            return;
        }

        const user = await User.findOne({ _id: decoded.user.id });
        if (!user) {
            res.status(StatusCodes.Unauthorized).json({ success: false, message: "Unauthorized :User not exits" });
        }
        
        req.user = decoded.user

        
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({ success: false, message: "Unauthorized: Token verification failed" });
       }
}


export default authMiddleware;