import app from "./common/config/express.config.js";
import { logger } from "./utils/log/logger.js";
import {
  MONGODB_CONNECTION_URL,
  SERVER_PORT,
} from "./common/constants/env.config.js";
import mongoose from "mongoose";

mongoose.connect(MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", function () {
  logger.error("Could not connect to the database. Exiting now...");
  process.exit();
});
mongoose.connection.once("open", function () {
  logger.info("Successfully connected to the database");
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    return logger.error("server failed to start", err);
  }
  return logger.info(`server started on port = [${SERVER_PORT}]`);
});
