import request from "../lib/request";
import { AlertsResponse } from "../models";

const fetchAlerts = async (
  city: string = "",
  start_date: string,
  end_date: string
): Promise<AlertsResponse[]> => {
  try {
    const url = `/alerts?city=${city}&start_date=${start_date}&end_date=${end_date}`;
    const response = await request.get(url);

    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export { fetchAlerts };
