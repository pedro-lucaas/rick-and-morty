import axios from "axios";

let API_HOST = "https://rickandmortyapi.com";

const API_BASE_URL = `${API_HOST}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
