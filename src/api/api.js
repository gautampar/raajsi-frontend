import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-orpin-nu-20.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add token to headers if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ya context/Redux se token bhi le sakte ho
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
