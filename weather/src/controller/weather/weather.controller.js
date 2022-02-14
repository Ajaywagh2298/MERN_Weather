import Weather from "../../models/weather.js";
import {
  addWeather,
  listWeather,
} from "../../middleware/service/weather.service.js";
import { logger } from "../../utils/log/logger.js";
import {generateAccessToken} from "../../utils/jwt.js";
import {setAuthCookie} from "../../middleware/authorization.js";

export async function addWeatherController(req, res, next) {
  try {
    const weather = new Weather();
    weather.city = req.body.city;
    weather.date = req.body.date;
    weather.time = req.body.time;
    weather.tempCelcius = req.body.temparature;
    const temp = req.body.temparature;
    weather.tempFahreinheit = (parseFloat(temp  * 1.8 + 32).toFixed(2));
    weather.windspeed = req.body.windspeed;
    weather.humidity = req.body.humidity;

    const addedWeather = await addWeather(weather);

    //await setAuthCookie(req, res);

    res.status(200).json(addedWeather);
  } catch (err) {
    logger.error(err);
    next(err, req, res);
  }
}

export async function viewWeatherController(req, res, next) {
  try {
    const weather = await listWeather();

    //await setAuthCookie(req, res);

   res.status(200).json(weather);
    //res.json(weather);
  } catch (err) {
    logger.error(err);
    next(err, req, res);
  }
}
