import mongoose from "mongoose";
import express from "express";
import { TransactionRoute, UserRoute } from "./routes";
import { MongoDbAdapter } from "./db/adapters/mongoDbAdapter";

const app = express();
const port = process.env.PORT || 3000;
const mongodb = new MongoDbAdapter(mongoose);

app.use(express.json());
app.use(async (req, res, next) => {
  await mongodb.connect();
  next();
});

app.use("/user", UserRoute);
app.use("/transactions", TransactionRoute);
app.get("/", (_, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => console.log("server running on port " + port));
