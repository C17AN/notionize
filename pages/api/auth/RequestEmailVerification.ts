import axios from "axios";

export const RequestEmailVerification = async (req, res) => {
  try {
    await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.FIREBASE_API_KEY}`
    );
  } catch (error) {}
};
