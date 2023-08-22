"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    mongoose_1.default
        .connect("mongodb://urubu:pix@localhost:27018/urubu_pix?authMechanism=DEFAULT&authSource=admin")
        .then(() => {
        console.log("Successfully connected to the DB");
    })
        .catch((e) => {
        console.log(e);
    });
    next();
});
app.use("/user", routes_1.UserRoute);
app.use("/transactions", routes_1.TransactionRoute);
app.listen(3000, () => "server running on port 3333");
