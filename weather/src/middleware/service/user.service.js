import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import { logger } from "../../utils/log/logger.js";
import {
  internalError,
  invalidUsernameOrPassword,
  unauthorized,
  userNotRegistered,
} from "../../utils/error/error.js";

export async function login({ username, password, type }) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ username });
    if (!user || type !== user.type) {
      logger.debug(`${user} not registered`);
      let unauthorizedResponse = unauthorized;
      unauthorizedResponse.message = userNotRegistered;
      reject(unauthorizedResponse);
      return;
    }

    if (bcrypt.compareSync(password, user.password)) {
      logger.debug(`${user} login successful`);
      resolve({ ...user.toJSON() });
    } else {
      let unauthorizedResponse = unauthorized;
      unauthorizedResponse.message = invalidUsernameOrPassword;
      reject(unauthorizedResponse);
    }
  });
}

export async function register(params) {
  return new Promise(async (resolve, reject) => {
    const user = new User(params);
    try {
      resolve(await user.save());
    } catch (e) {
      let internalErrorResponse = internalError;
      internalErrorResponse.message = "user registration failed";
      reject(internalErrorResponse);
    }
  });
}
