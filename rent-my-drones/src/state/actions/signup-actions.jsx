import axios from "axios"

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const register = (signup, push) => async (dispatch) => {

    try {
        // dispatch start of action to reducer
        dispatch({ type: SIGNUP_START });

        // make api call and save response
        // TODO update this endpoint after backend redeployment
        const response = await axios.post(`http://localhost:8000/api/auth/signup`, signup);

        // dispatch success to reducer
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });

        // navigate to login
        push('/login');

    } catch (err) {

        // dispatch failure to reducer
        dispatch({ type: SIGNUP_FAILURE, payload: err.message });

    }
}

