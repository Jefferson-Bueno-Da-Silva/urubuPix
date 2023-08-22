export interface IFriendlyErrors {
  code: number;
  message: string;
}

export const FRIENDLY_ERRORS = {
  userAsshole: {
    code: 402,
    message:
      "Pague o aluguel!\nReserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. As an example of its use, however, Apple’s MobileMe service generates a 402 error (“httpStatusCode:402” in the Mac OS X Console log) if the MobileMe account is delinquent.",
  },
  userNotExists: {
    code: 418,
    message:
      "verifique o usuário 🤡 \nIm a teapot: This code was defined in 1998 as one of the traditional IETF April Fools’ jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. However, known implementations do exist.",
  },
  userAlreadyExists: {
    code: 400,
    message: "O usuário já caiu no golpe",
  },
  unknownError: {
    code: 500,
    message: "Ocorreu um erro inesperado !",
  },
};
