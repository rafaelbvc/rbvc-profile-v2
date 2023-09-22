import axios from "axios";
import { baseURL } from "./baseURL";

export const privateURL = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
