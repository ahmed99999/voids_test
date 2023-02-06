import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "forecasts" })
export class Forecast {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  forecasted_sales_quantity: number;
}
