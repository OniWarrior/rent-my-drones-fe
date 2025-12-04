import axios from "axios"


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin = (login, navigate) => async (dispatch) => {
    try {
        // dispatch start of action to reducer
        dispatch({ type: LOGIN_START });

        // make api call and save response 
        // TODO - update this endpoint after backend is redeployed
        const response = await axios.post(`http://localhost:8000/api/auth/login`, login);

        // dispatch success to reducer
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });

        // store token
        localStorage.setItem('token', response.data.token);

        // store role
        localStorage.setItem('role', response.data.role);

        const role = localStorage.getItem('role');



        // nav to dashboard
        switch (role) {
            case "Renter": navigate('/renter-dashboard'); break;
            case "Owner": navigate('/owner-dashboard'); break;
            default:
                return;
        }


    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
    }

}


