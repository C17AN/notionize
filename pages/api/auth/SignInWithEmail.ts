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

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const SignInWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
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
