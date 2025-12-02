import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
};

export default axiosWithAuth;


