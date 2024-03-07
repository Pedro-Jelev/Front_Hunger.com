import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-hunger-com.onrender.com",
  // baseURL: "http://localhost:3000",
});
