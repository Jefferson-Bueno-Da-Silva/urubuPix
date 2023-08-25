import mongoose from "mongoose";
import { IConnectionDB } from "../IConnectionDB";

export class MongoDbAdapter implements IConnectionDB {
  constructor(private _mongoose: typeof mongoose) {}

  async connect() {
    const user = process.env.USER_DB;
    const password = process.env.PASSWORD_DB;
    const connection = process.env.CONNECTION_DB;

    await this._mongoose
      .connect(
        `mongodb://${user}:${password}@${connection}?authMechanism=DEFAULT&authSource=admin`
      )
      .then(() => {
        console.log("Successfully connected to the DB");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
