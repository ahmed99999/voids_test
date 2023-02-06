export interface ForecastsResponse {
  id: string;
  date: string;
  location: string;
  forecasted_sales_quantity: number;
  datetime: string;
  temp: number;
}

export interface AlertsResponse {
  datetime: string;
}
