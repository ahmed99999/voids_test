import request from "../lib/request";
import { ForecastsResponse } from "../models";

const fetchForecasts = async (
  city: string = "",
  start_date: string,
  end_date: string
): Promise<ForecastsResponse[]> => {
  try {
    const url = `/forecasts?city=${city}&start_date=${start_date}&end_date=${end_date}`;
    const response = await request.get(url);

    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export { fetchForecasts };
