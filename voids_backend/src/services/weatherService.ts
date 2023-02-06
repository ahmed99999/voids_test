import axios from "axios";
import {
  VISUAL_CROSSING_WEATHER_API_BASE_URL,
  VISUAL_CROSSING_WEATHER_API_KEY,
  UNIT_GROUP,
  INCLUDE,
} from "../constants";

interface DayWeather {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
}

interface WeatherDataResponse {
  datetime: string;
  temp: number;
}

interface Params {
  city: string;
  start_date: string;
  end_date: string;
}

const getWeatherApiURL = ({ city, start_date, end_date }: Params) => {
  return `${VISUAL_CROSSING_WEATHER_API_BASE_URL}/${city}/${start_date}/${end_date}?key=${VISUAL_CROSSING_WEATHER_API_KEY}&unitGroup=${UNIT_GROUP}&include=${INCLUDE}`;
};

const getWeatherData = async (
  params: Params
): Promise<WeatherDataResponse[]> => {
  try {
    const url = getWeatherApiURL(params);
    const response = await axios.get(url);

    return response.data.days.map((day: DayWeather) => ({
      datetime: day.datetime,
      temp: day.temp,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getWeatherData, Params, WeatherDataResponse };
