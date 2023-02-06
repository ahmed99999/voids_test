import {
  getTotalSalesInThreeDays,
  getWeatherCondition,
  WeatherForecastedSalesResponse,
} from "../utils";

const mapToAlerts = (
  weatherForecastedSales: WeatherForecastedSalesResponse[]
): WeatherForecastedSalesResponse[] => {
  let result: WeatherForecastedSalesResponse[] = [];
  let counter = 0;
  const iterations = weatherForecastedSales.length - 3;

  while (counter < iterations) {
    const currentThreeDays = weatherForecastedSales.slice(counter, counter + 3);
    const totalSalesInThreeDays = getTotalSalesInThreeDays(currentThreeDays);

    if (totalSalesInThreeDays < 1000 || getWeatherCondition(currentThreeDays)) {
      result = result.concat(currentThreeDays);
      counter += 3;
      continue;
    }

    counter++;
  }

  return result;
};

export { mapToAlerts };
