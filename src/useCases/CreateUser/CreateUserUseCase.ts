import { FRIENDLY_ERRORS } from "../../constants/FriendlyErrors";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(userDTO: ICreateUserDTO) {
    const user = await this.userRepository.exists(userDTO.email);
    if (user) {
      throw FRIENDLY_ERRORS.userAlreadyExists;
    }

    const newUser = this.userRepository.create(userDTO);
    return newUser;
  }
}
