import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:3000/tools",
});

export default api;
