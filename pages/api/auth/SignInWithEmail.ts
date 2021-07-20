import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

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
  await axios
    .post(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    })
    .then((result) => res.status(200).send({ data: result.data }))
    .catch((err) => {
      console.log(err);
      return res.status(400).send({ message: err });
    });
};

export default SignInWithEmail;
