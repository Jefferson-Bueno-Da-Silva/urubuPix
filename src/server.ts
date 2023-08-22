import mongoose from "mongoose";
import express from "express";
import { TransactionRoute, UserRoute } from "./routes";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  mongoose
    .connect(
      "mongodb://urubu:pix@localhost:27018/urubu_pix?authMechanism=DEFAULT&authSource=admin"
    )
    .then(() => {
      console.log("Successfully connected to the DB");
    })
    .catch((e) => {
      console.log(e);
    });
  next();
});

app.use("/user", UserRoute);
app.use("/transactions", TransactionRoute);

app.listen(3000, () => "server running on port 3333");
