import cors from "cors";
import express from "express";
import dbConnect from "./config/db";
import mainRouter from "./routes/indexRoutes";
import env from "./utils/env";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials:true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use("/api", mainRouter);
app.use((req, res) => {
  res.json({ msg: "server ftne vala hai jldo baag jaaye yha se" });
});

app.listen(env.PORT, () =>
  console.log(`server chalu hai ${env.PORT} port hai`)
);
