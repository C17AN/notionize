import axios from "axios";

export const createUserOnDB = async (req, res) => {
  try {
    const res = await axios.post("http://localhost:5000/user");
  } catch (error) {}
};
