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
exports.AddDepositController = void 0;
const FriendlyErrors_1 = require("../../constants/FriendlyErrors");
class AddDepositController {
    constructor(addDepositUseCase) {
        this.addDepositUseCase = addDepositUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            try {
                const newBalance = yield this.addDepositUseCase.execute(body);
                return response.status(200).json(newBalance);
            }
            catch (error) {
                const e = error;
                if (e === null || e === void 0 ? void 0 : e.code) {
                    return response.status(e.code).json({ message: e.message });
                }
                console.error("AddDeposit: " + error);
                return response
                    .status(FriendlyErrors_1.FRIENDLY_ERRORS.unknownError.code)
                    .send(FriendlyErrors_1.FRIENDLY_ERRORS.unknownError.message);
            }
        });
    }
}
exports.AddDepositController = AddDepositController;
