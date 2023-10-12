import axios from "axios";
import { API_ROOT } from "../../constants/environment";

export const api = axios.create({
    withCredentials: false,
    baseURL: API_ROOT
});