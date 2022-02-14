import jwt from "jsonwebtoken";
import { invalidUsernameOrPassword, unauthorized } from "./error/error.js";
import { TOKEN_KEY } from "../common/constants/env.config.js";
import { logger } from "./log/logger.js";

export async function authenticateToken(req, res, next) {
  try {
    const token = req.cookies["auth_token"];
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", req);
    if (token == null) {
      let unauthorizedResponse = unauthorized;
      unauthorizedResponse.message = "Authorization token not present";
      throw unauthorizedResponse;
    }

    await jwt.verify(token, TOKEN_KEY, (err, decoded) => {
      if (err) {
        let unauthorizedResponse = unauthorized;
        unauthorizedResponse.message = "invalid authorization token";
        throw unauthorizedResponse;
      }
      if (!decoded) {
        let unauthorizedResponse = unauthorized;
        unauthorizedResponse.message = invalidUsernameOrPassword;
        throw unauthorizedResponse;
      }
      req.user = decoded;
      next();
    });
  } catch (e) {
    logger.error(e);
    next(e, req, res);
  }
}

export async function generateAccessToken(username, type) {
  return await jwt.sign({ username: username, type: type }, TOKEN_KEY, {
    expiresIn: "30m",
  });
}
