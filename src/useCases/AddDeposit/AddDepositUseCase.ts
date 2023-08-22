import { FRIENDLY_ERRORS } from "../../constants/FriendlyErrors";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IDepositDTO } from "./AddDepositDTO";

export class AddDepositUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(depositDTO: IDepositDTO) {
    const user = await this.userRepository.findByEmail(depositDTO.email);

    if (depositDTO.value < 0) {
      throw FRIENDLY_ERRORS.userAsshole;
    }

    if (user) {
      const newBalance = user.balance + depositDTO.value;
      await this.userRepository.updateUser(user._id, {
        balance: newBalance,
      });
      return newBalance;
    } else {
      throw FRIENDLY_ERRORS.userNotExists;
    }
  }
}
