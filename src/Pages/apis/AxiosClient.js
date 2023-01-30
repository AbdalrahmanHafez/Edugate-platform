import axios from "axios";
const axClient = axios.create({
  baseURL: "https://api.edugate-eg.com/api/EduGate",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axClient;

// set axios header with token
// axClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
