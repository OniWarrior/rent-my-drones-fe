import axios from "axios";


const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://rent-my-drones-be-ffc04f1c4ced.herokuapp.com",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
};

export default axiosWithAuth;


