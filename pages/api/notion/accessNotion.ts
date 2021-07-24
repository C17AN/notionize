import { NextApiResponse, NextApiRequest } from "next";
import Axios from "./axiosInstance";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const postList = await Axios.get("/");
      res.status(200).send({ data: postList.data, message: "데이터베이스 글 목록" });
    } catch (error) {
      res.status(400).send({ message: "no!" });
    }
  } else if (req.method === "POST") {
    try {
      const postList = await Axios.post("/query");
      res.status(200).send({ data: postList.data, message: "데이터베이스 글 목록" });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
};
