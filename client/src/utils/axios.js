import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-assignment6.herokuapp.com/",
});

export default axiosInstance;
