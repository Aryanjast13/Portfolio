import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default apiInstance;