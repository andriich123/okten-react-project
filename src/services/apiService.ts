import axios from "axios";
import { baseURL } from "../constants/urls";
import { env } from "../constants/confg";

const apiService = axios.create({ baseURL });

apiService.interceptors.request.use((request) => {
  if (env.MOVIEDB_ACCESS_TOKEN) {
    request.headers.Authorization = `Bearer ${env.MOVIEDB_ACCESS_TOKEN}`;
  }

  return request;
});

export { apiService };
