import axios from "axios";

export const getNotionMetaDataAPI = () => {
  return axios.get("/api/notion/accessNotion");
};

export const getNotionPostsAPI = () => {
  return axios.post("/api/notion/accessNotion");
};
