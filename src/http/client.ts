import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:5501";

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

console.log("Backend API URL:", import.meta.env.VITE_BACKEND_API_URL);
