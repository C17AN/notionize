import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface IsignInResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: string;
}

const SignInWithEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
    const data: AxiosResponse<IsignInResponse> = await axios.post(URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(data);

    res.status(200).send({ message: "Sign in with Email success", data: data.data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error });
  }
};

export default SignInWithEmail;
