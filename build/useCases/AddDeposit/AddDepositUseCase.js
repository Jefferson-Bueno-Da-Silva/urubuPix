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
exports.AddDepositUseCase = void 0;
const FriendlyErrors_1 = require("../../constants/FriendlyErrors");
class AddDepositUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(depositDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(depositDTO.email);
            if (depositDTO.value < 0) {
                throw FriendlyErrors_1.FRIENDLY_ERRORS.userAsshole;
            }
            if (user) {
                const newBalance = user.balance + depositDTO.value;
                yield this.userRepository.updateUser(user._id, {
                    balance: newBalance,
                });
                return newBalance;
            }
            else {
                throw FriendlyErrors_1.FRIENDLY_ERRORS.userNotExists;
            }
        });
    }
}
exports.AddDepositUseCase = AddDepositUseCase;
