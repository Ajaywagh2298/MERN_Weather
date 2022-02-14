import User from "../../models/user.js";
import { internalError } from "../../utils/error/error.js";
import Weather from "../../models/weather.js";

export async function addWeather(weather) {
  return new Promise(async (resolve, reject) => {
    try {
      const savedWeather = await weather.save();
      resolve(savedWeather);
    } catch (e) {
      let internalErrorResponse = internalError;
      internalErrorResponse.message = "failed to add weather";
      reject(internalErrorResponse);
    }
  });
}

export async function listWeather() {
  return new Promise(async (resolve, reject) => {
    try {
      const weather = await Weather.find();
      resolve(weather);
    } catch (e) {
      let internalErrorResponse = internalError;
      internalErrorResponse.message = "failed to fetch weather list";
      reject(internalErrorResponse);
    }
  });
}
