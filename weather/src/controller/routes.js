import express from "express";
import { registerController, loginController } from "./user/user.controller.js";
import {
  addWeatherController,
  viewWeatherController,
} from "./weather/weather.controller.js";
import { authenticateToken } from "../utils/jwt.js";
import { isAdmin, isUser } from "../middleware/authorization.js";

const routes = express.Router();
routes.post("/register", registerController);
routes.post("/login", loginController);

routes.post("/weather", authenticateToken, isAdmin, addWeatherController);
routes.get("/weather", authenticateToken, isUser, viewWeatherController);

export default routes;
