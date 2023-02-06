import { Router } from "express";
import getWeatherData from "./alerts";
import forecasts from "./forecasts";

const router = Router({ mergeParams: true });

router.use(forecasts).use(getWeatherData);

export default router;
