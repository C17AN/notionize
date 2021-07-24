import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const SignUpWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
    const firebaseRequest = await axios.post(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    res.status(200).send({ message: "Sign up with Email success", data: firebaseRequest.data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "no!!" });
  }
};

export default SignUpWithEmail;
