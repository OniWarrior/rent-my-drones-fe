import axiosWithAuth from '../../components/utils/axios-with-auth.jsx';


export const AVAILABLE_START = 'AVAILABLE_START';
export const AVAILABLE_SUCCESS = 'AVAILABLE_SUCCESS';
export const AVAILABLE_FAILURE = 'AVAILABLE_FAILURE';


export const getAvailableDrones = () => async (dispatch) => {

    try {
        // dispatch start of action
        dispatch({ type: AVAILABLE_START });

        // make api call and save response
        const response = await axiosWithAuth().get(`/api/users/available`);

        // dispatch success to reducer function
        dispatch({ type: AVAILABLE_SUCCESS, payload: response.data.drones });

    } catch (err) {

        // dispatch failure to reducer
        dispatch({ type: AVAILABLE_FAILURE, payload: err.message });

    }


}

export const rentAvailableDrone = (id) => async (dispatch) => {
    try {
        // dispatch start of action to reducer
        dispatch({ type: AVAILABLE_START });

        // make api call and save response
        const response = await axiosWithAuth().put(`/api/users/available/${id}`);

        // dispatch success to reducer
        dispatch({ type: AVAILABLE_SUCCESS, payload: response.data });

        //alert  success message
        alert(`${response.data.message}`);



    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: AVAILABLE_FAILURE, payload: err.message });

    }


}