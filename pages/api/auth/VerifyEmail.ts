import axios from "axios";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

const VerifyEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { idToken } = req.body.data.data;
  console.log(req.body);
  try {
    const firebaseURL = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.FIREBASE_API_KEY}`;
    const firebaseRequest = await axios.post(firebaseURL, {
      idToken,
      requestType: "VERIFY_EMAIL",
    });
    res.status(200).send({ message: "인증 메시지 전송 성공", data: firebaseRequest.data });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export default VerifyEmail;
