import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import sendHello from "./routes/CRUD/sendHello.js";

const app = express();
app.use(cookieParser());
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/user", sendHello);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`The port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`There was an error: ${error}`);
  });
