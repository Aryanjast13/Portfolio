import { cleanEnv, str, url, port } from "envalid"    
import dotenv from "dotenv";
dotenv.config();

const env = cleanEnv(process.env, {
    MONGO_URL: url(),
    DATABASE_NAME: str(),
    PORT: port()
});

export default env;