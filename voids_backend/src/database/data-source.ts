import "reflect-metadata";
import { DataSource } from "typeorm";
import { Forecast } from "../entity";
import { HOST, USER, PASSWORD, DATABASE } from "../constants";

const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: 5432,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  // schema: "oneglass",
  // synchronize: true,
  // logging: false,
  entities: [Forecast],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
