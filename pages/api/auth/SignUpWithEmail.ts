import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

type signUpFormType = {
  email: string;
  password: "";
  password_validate: "";
  username: "";
  githubUrl: "";
  interests: [];
  id: string;
};

const SignUpWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, username, githubUrl, interests }: signUpFormType = req.body;
    const FirebaseURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
    const BackendUrl = `http://localhost:5000/user`;

    const userData = {
      email,
      username,
      githubUrl,
      interests,
      id: uuid(),
    };

    const firebaseRequest = await axios.post(FirebaseURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    const databaseRequest = await axios.post(BackendUrl, userData);
    res.status(200).send({ message: "Sign up with Email success", data: firebaseRequest.data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "이메일 - 회원가입 실패", error });
  }
};

export default SignUpWithEmail;
