import { Forecast } from "../entity";
import { WeatherDataResponse } from "../services/weatherService";

export interface WeatherForecastedSalesResponse {
  id: number;
  date: Date;
  location: string;
  forecasted_sales_quantity: number;
  datetime: string;
  temp: number;
}

const getWeatherForecastedSales = (
  forecastedSales: Forecast[],
  weatherData: WeatherDataResponse[]
): WeatherForecastedSalesResponse[] => {
  return forecastedSales.map((forecast) => {
    const forecastFormattedDate = Intl.DateTimeFormat("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(forecast.date);

    return {
      ...forecast,
      ...weatherData.find((data) => data.datetime === forecastFormattedDate)!,
    };
  });
};

const getTotalSalesInThreeDays = (
  WeatherForecastedSales: WeatherForecastedSalesResponse[]
): number =>
  WeatherForecastedSales.reduce(
    (sum, currentForecast) => sum + currentForecast.forecasted_sales_quantity,
    0
  );

const getWeatherCondition = (
  weatherForecastedSales: WeatherForecastedSalesResponse[]
): boolean => {
  const weatherCondition = weatherForecastedSales.reduce(
    (condition, currentForecast) => {
      return condition && currentForecast.temp < 5;
    },
    true
  );

  const salesCondition =
    getTotalSalesInThreeDays(weatherForecastedSales) <= 1500;

  return weatherCondition && salesCondition;
};

export {
  getWeatherForecastedSales,
  getTotalSalesInThreeDays,
  getWeatherCondition,
};
