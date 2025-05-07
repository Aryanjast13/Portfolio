import express from "express";
import env from "./utils/env"
import dbConnect from "./config/db";

const app = express();

dbConnect();

app.use((req, res) => {
    res.json({"msg":"server ftne vala hai jldo baag jaaye yha se"})
})


app.listen(env.PORT,()=>console.log(`server chalu hai ${env.PORT} port hai`))