import mongoose from "mongoose";

const { Schema } = mongoose;

const WeatherSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  tempCelcius: {
    type: Number,
    required: true,
  },
  tempFahreinheit: {
    type: Number,
    required: true,
  },
  windspeed: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
});

WeatherSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const Weather = mongoose.model("weather", WeatherSchema);
export default Weather;
