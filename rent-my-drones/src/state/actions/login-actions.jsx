import axios from "axios"


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const postLogin = (login, push) => async (dispatch) => {
    try {
        // dispatch start of action to reducer
        dispatch({ type: LOGIN_START });

        // make api call and save response 
        // TODO - update this endpoint after backend is redeployed
        const response = await axios.post(`https://localhost:8000/api/auth/Login`, login);

        // dispatch success to reducer
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });

        // store token
        localStorage.setItem('token', response.data.token);

        // nav to dashboard
        push('/dashboard');


    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: LOGIN_FAILURE, payload: err.message });
    }

}


