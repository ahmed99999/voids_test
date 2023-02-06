import { Router } from "express";
import { getForecasts } from "../controllers/forecastController";

const forecastRouter = Router({ mergeParams: true });

forecastRouter.get("/forecasts", getForecasts);

export default forecastRouter;
