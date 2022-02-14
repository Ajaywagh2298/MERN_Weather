import { forbidden } from "../utils/error/error.js";
import { logger } from "../utils/log/logger.js";
import {generateAccessToken} from "../utils/jwt.js";

export async function isUser(req, res, next) {
  try {
    if (req.user.type === "user") {
      next();
    } else {
      let forbiddenResponse = forbidden;
      forbiddenResponse.message = "request only allowed for type 'user'";
      throw forbiddenResponse;
    }
  } catch (e) {
    logger.error(e);
    next(e, req, res);
  }
}
export async function isAdmin(req, res, next) {
  try {
    if (req.user.type === "admin") {
      next();
    } else {
      let forbiddenResponse = forbidden;
      forbiddenResponse.message = "request only allowed for type 'admin'";
      throw forbiddenResponse;
    }
  } catch (e) {
    logger.error(e);
    next(e, req, res);
  }
}

export async function setAuthCookie(req, res, token) {
  if(!token) {
    const user = req.user;
    token = await generateAccessToken(user.username, user.type);
  }

  res.cookie("auth_token", token, {
    secure: true,
    httpOnly: true,
    maxAge: 30 * 60,
  });
}
