import express from "express";
import bcrypt from "bcryptjs";
import { login, register } from "../../middleware/service/user.service.js";
import User from "../../models/user.js";
import { logger } from "../../utils/log/logger.js";
import { generateAccessToken } from "../../utils/jwt.js";
import { badRequest, conflict } from "../../utils/error/error.js";
import {setAuthCookie} from "../../middleware/authorization.js";

export const router = express.Router();

export async function registerController(req, res, next) {
  try {
    const { username, firstname, lastname, email, password, type } = req.body;

    if (!username) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing username";
      throw badRequestResponse;
    }
    if (!firstname) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing firstname";
      throw badRequestResponse;
    }
    if (!lastname) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing lastname";
      throw badRequestResponse;
    }
    if (!email) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing email";
      throw badRequestResponse;
    }
    if (!password) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing password";
      throw badRequestResponse;
    }
    if (!type) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing user type";
      throw badRequestResponse;
    }

    if (type !== "user" && type !== "admin") {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "invalid user type";
      throw badRequestResponse;
    }

    const oldUser = await User.findOne({ username });

    if (oldUser) {
      let conflictResponse = conflict;
      conflictResponse.message = "user already registered, please login.";
      throw conflictResponse;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await register({
      username,
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
      type,
    });

    res.status(200).json(user);
  } catch (err) {
    logger.error(err);
    next(err, req, res);
  }
}

export async function loginController(req, res, next) {
  try {
    const { username, password, type } = req.body;

    if (!(username && password)) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing username or password";
      throw badRequestResponse;
    }

    if (!type) {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "missing user type";
      throw badRequestResponse;
    }

    if (type !== "user" && type !== "admin") {
      let badRequestResponse = badRequest;
      badRequestResponse.message = "invalid user type";
      throw badRequestResponse;
    }

    const user = await login({ username, password, type });

    const token = await generateAccessToken(user.username, user.type);
    await setAuthCookie(req, res, token );
    logger.info(`login successful for user: ${username}`, username)
    res.status(200).json(user);
  } catch (err) {
    logger.error(err);
    next(err, req, res);
  }
}
