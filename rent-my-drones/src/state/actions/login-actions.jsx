import axiosWithAuth from "../../components/utils/axios-with-auth"


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin = (login, navigate) => async (dispatch) => {
    try {
        // dispatch start of action to reducer
        dispatch({ type: LOGIN_START });

        // make api call and save response 

        const response = await axiosWithAuth().post(`/api/auth/login`, login);

        // dispatch success to reducer
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });

        // store token
        localStorage.setItem('token', response.data.token);

        // store role
        localStorage.setItem('role', response.data.role);

        // navigate to dash
        navigate('/dashboard');


    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
    }

}


