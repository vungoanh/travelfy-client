import axios from "axios";

const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;
const baseURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=";

export const getWeather = async (lat, lng) => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        lat,
        lon: lng,
        exclude: "current,hourly,minutely,alerts",
        units: "metric",
        appid: '330d78e7eed8d1427187074f23b831d0',
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
