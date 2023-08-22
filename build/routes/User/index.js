"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = __importDefault(require("./Create"));
const router = (0, express_1.Router)();
router.post("/create", Create_1.default);
exports.default = router;
