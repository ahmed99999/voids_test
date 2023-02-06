import Axios, { AxiosError, AxiosInstance } from "axios";

const http: AxiosInstance = Axios.create({
    baseURL: 'http://localhost:3000/api', //in a real sapplication we would initiate the base url here
});

http.interceptors.response.use(undefined, (err) => {
    const expectedError: AxiosError =
        err.response && err.response.status >= 400 && err.response.status < 500;
    if (expectedError) {
        console.error("SOMETHING UNEXPECTED HAPPENED");
    }
    return Promise.reject(err);
});

export default http;