import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { userRegister } from "./routes/register_routes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectMongoos } from "./config/connect.js";
import { userPost } from "./routes/post_routes.js";

dotenv.config();
const app = express();

app.use(cors());

connectMongoos();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user/", userRegister);

app.use("/api/post/", userPost);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`App is working on ${process.env.PORT.cyan}`);
});
