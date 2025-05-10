import { CookieOptions } from "express";
import jwt from "jsonwebtoken";
import env from "../utils/env";
import ms from "ms";


export const generate__acceson_token = (user: any)=>{
    try {
        const secret = env.JWT_SECRET;
        const expiresIn = env.TOKEN_KEY_EXPIRY as ms.StringValue;

        if (!secret || !expiresIn) {
            throw new Error("Missing secret key and expires key in environment variables"); 
        }

        return jwt.sign({ user }, secret, {expiresIn:expiresIn});

     } catch(error) {
        console.log("Error genrating access token: ", error)
        return null;
    }
}

//cookie options

export const access_tokenOptions: CookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	sameSite: (process.env.NODE_ENV === "production" ? "none" : "lax") as
		| "lax"
		| "none",
	maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
};