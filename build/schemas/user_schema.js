"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    balance: { type: Number, required: true },
});
