"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AddDeposit_1 = __importDefault(require("./AddDeposit"));
const router = (0, express_1.Router)();
router.post("/add-deposit", AddDeposit_1.default);
exports.default = router;
