import { Request, Response, NextFunction } from "express";
import { mapToForecastedSales } from "../models/forecasts";

import { mapToAlerts } from "../models/alert";

const getQueryParams = (request: Request) => ({
  city: request.query.city?.toString() || "",
  start_date: request.query.start_date?.toString() || "",
  end_date: request.query.end_date?.toString() || "",
});

export const getForecasts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const params = getQueryParams(request);
  const WeatherForecastedSales = await mapToForecastedSales(params);

  response.json(WeatherForecastedSales);
  next?.();
};

export const getAlerts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const params = getQueryParams(request);
  const weatherForecastedSales = await mapToForecastedSales(params);
  const result = mapToAlerts(weatherForecastedSales);

  response.json(result);
  next?.();
};
