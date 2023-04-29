import axios from "axios";

export const mytineraryDB = axios.create({
    baseURL: process.env.REACT_APP_BASE_URI
});
