import winston, { format } from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new winston.transports.File({ filename: "logs/app.log" }),
    new winston.transports.Console(),
  ],
  colorize: true,
  timestamp: true,
});
