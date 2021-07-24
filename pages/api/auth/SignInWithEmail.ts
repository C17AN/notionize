import axios, { AxiosResponse } from "axios";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import initMiddleware from "../../../lib/init-middleware";

export interface IsignInResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: string;
  error: {
    message: string;
  };
}

const SignInWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
  try {
    const firebaseRequest = await axios.post(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    res.status(200).send({ message: "이메일 로그인 성공", data: firebaseRequest.data });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err });
  }
};

export default SignInWithEmail;
