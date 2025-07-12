import axios from "axios";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", 
  withCredentials: true, 
});

API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    if (response?.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    const message =
    error?.message ||
      error?.response?.data?.message ||
      "An unexpected error occurred.";
    toast.error(message);
    return Promise.reject(error);
  }
);

export const registerUser = async (userData) => {
  const res = await API.post("/signup", userData);
  return res.data; 
};

export const loginUser = async (userData) => {
  const res = await API.post("/signin", userData);
  return res.data; 
};