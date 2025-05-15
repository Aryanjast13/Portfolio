import dotenv from "dotenv";
import { cleanEnv, port, str, url } from "envalid";
dotenv.config();

const env = cleanEnv(process.env, {
  MONGO_URL: url(),
  DATABASE_NAME: str(),
  PORT: port(),
  JWT_SECRET: str(),
  TOKEN_KEY_EXPIRY: str(),
  CLOUDINARY_CLOUD_NAME: str(),
  CLOUDINARY_API_KEY: str(),
  CLOUDINARY_API_SECRET: str(),
  NODE_ENV:str(),
});

export default env;
