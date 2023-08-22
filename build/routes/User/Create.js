"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUser_1 = require("../../useCases/CreateUser");
const CreateUser = (req, res) => {
    CreateUser_1.createUserController.handle(req, res);
};
exports.default = CreateUser;
