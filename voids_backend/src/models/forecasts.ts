import AppDataSource from "../database/data-source";
import { Forecast } from "../entity";
import { Between } from "typeorm";
import { getWeatherData, Params } from "../services/weatherService";
import { getWeatherForecastedSales } from "../utils";

const getForecastedSales = async ({ city, start_date, end_date }: Params) => {
  return await AppDataSource.getRepository(Forecast).find({
    where: {
      ...(city && { location: city }),
      ...(start_date &&
        end_date && {
          date: Between(new Date(start_date), new Date(end_date)),
        }),
    },
    // order: {
    //   date: "ASC",
    // },
  });
};

const mapToForecastedSales = async (params: Params) => {
  const forecastedSales = await getForecastedSales(params);
  const weatherData = await getWeatherData(params);

  return getWeatherForecastedSales(forecastedSales, weatherData);
};

export { getForecastedSales, mapToForecastedSales };
