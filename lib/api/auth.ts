import axios from "axios";
import { emailVerifyCationType } from "../../types/emailVerifyCationType";

type signUpFormType = {
  email: string;
  password: "";
  password_validate: "";
  username: "";
  githubUrl: "";
  interests: [];
};

export const signUpEmailAPI = (body: signUpFormType) => {
  return axios.post("/api/auth/SignUpWithEmail", body);
};

export const verifyEmailAPI = (body: emailVerifyCationType) => {
  return axios.post("/api/auth/VerifyEmail", body);
};
