"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddDeposit_1 = require("../../useCases/AddDeposit");
const AddDeposit = (req, res) => {
    AddDeposit_1.addDepositController.handle(req, res);
};
exports.default = AddDeposit;
