import express from "express";
import cors from "./cors.config.js";
import { sendError } from "../../middleware/error.js";
import routes from "../../controller/routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use("*", cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", routes);

app.use(sendError);

export default app;
