"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const FriendlyErrors_1 = require("../../constants/FriendlyErrors");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, balance, email } = request.body;
            try {
                const newUser = yield this.createUserUseCase.execute({
                    name,
                    balance,
                    email,
                });
                return response.status(201).json(newUser);
            }
            catch (error) {
                const e = error;
                if (e === null || e === void 0 ? void 0 : e.code) {
                    return response.status(e.code).json({ message: e.message });
                }
                console.error("CreateUser: " + error);
                return response
                    .status(FriendlyErrors_1.FRIENDLY_ERRORS.unknownError.code)
                    .send(FriendlyErrors_1.FRIENDLY_ERRORS.unknownError.message);
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
