import { Router } from "express";
import { getAlerts } from "../controllers/forecastController";

const weatherRouter = Router({ mergeParams: true });

weatherRouter.get("/alerts", getAlerts);

export default weatherRouter;
