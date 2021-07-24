import axios from "axios";

const notionAPIKEY = "secret_XuZEFmE8db8Z4I5DcAWUQtAUQRvdPljDl8Lsb8ia1te";
const databaseID = "2a788bc8723247388470b7f8040c37bf";

const Axios = axios.create({
  baseURL: `https://api.notion.com/v1/databases/${databaseID}`,
});

Axios.interceptors.request.use((config) => {
  config.headers.Authorization = notionAPIKEY;
  config.headers["Notion-Version"] = "2021-05-13";
  return config;
});

export default Axios;
