"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.transactionSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: Number, required: true },
});
