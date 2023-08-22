"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoute = exports.UserRoute = void 0;
var User_1 = require("./User");
Object.defineProperty(exports, "UserRoute", { enumerable: true, get: function () { return __importDefault(User_1).default; } });
var Transaction_1 = require("./Transaction");
Object.defineProperty(exports, "TransactionRoute", { enumerable: true, get: function () { return __importDefault(Transaction_1).default; } });
