import axios from "axios";

export const instance = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=[yourkey]&",
    withCredentials: true,
});