import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://rent-my-drones-be.herokuapp.com",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
};

export default axiosWithAuth;


