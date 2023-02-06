import AppDataSource from "./database/data-source";
import express, { Express } from "express";
// import "reflect-metadata";
import cors from "cors";
import routes from "./routes";
import { API_PORT } from "./constants";

const app: Express = express();

AppDataSource.initialize()
  .then(() => {
    console.log("connected to  the database...");

    app.use(cors());
    app.use(express.json());
    app.set("Content-Type", "application/json");
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", routes);
    app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}...`));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
