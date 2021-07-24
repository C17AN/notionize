import axios from "axios";

type signUpFormType = {
  email: string;
  password: "";
  password_validate: "";
  username: "";
  githubUrl: "";
  interests: [];
};

export const signUpEmailAPI = (body: signUpFormType) =>
  axios.post("/api/auth/SignUpWithEmail", body);
