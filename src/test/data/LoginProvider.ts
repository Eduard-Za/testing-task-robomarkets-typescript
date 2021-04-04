import { SystemMessages } from "../e2e/constants/SystemMessages";

interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginProvider {
  credentials: UserCredentials;
  errors: Array<string>;
}

const providerData: Array<LoginProvider> = [
  {
    credentials: {
      email: "",
      password: "",
    },
    errors: [
      SystemMessages.ERROR_MESSAGE_EMAIL,
      SystemMessages.ERROR_MESSAGE_PASSWORD,
    ],
  },
  {
    credentials: {
      email: "invalid email",
      password: "invalid password",
    },
    errors: [
      SystemMessages.ERROR_MESSAGE_INVALID_EMAIL,
      SystemMessages.ERROR_MESSAGE_INVALID_PASSWORD,
    ],
  },
];

export default providerData;
