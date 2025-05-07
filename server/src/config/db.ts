import mongoose from "mongoose";
import env from "../utils/env";


interface Connection{
    isConnected?: number
  }

const connection: Connection = {};

const dbConnect = async () => {

    try {
        if (connection?.isConnected) {
            console.log("already connected");
            return;
        }
        const connect = await mongoose.connect(env.MONGO_URL + env.DATABASE_NAME)
        connection.isConnected = connect.connections[0].readyState; 
        console.log(connect.connections[0].readyState);

    
        
    } catch (error:any) {
                console.log(`Database not Connected: ${error.message}`);

    }
    
}

export default dbConnect;