import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const SignInWithOAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.FIREBASE_API_KEY}`,
        {
          requestUri: "/",
          returnSecureToken: true,
        }
      );
      res.status(200).send({ message: "login Success!" });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
};

export default SignInWithOAuth;
