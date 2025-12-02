import axiosWithAuth from "../../components/utils/axios-with-auth";

export const RENTED_START = 'RENTED_START'
export const RENTED_SUCCESS = 'RENTED_SUCCESS'
export const RENTED_FAILURE = 'RENTED_FAILURE'

/*
 * getRentedDronesCount: api call to get the total count of rented
 *                     : drones of the renter
 */
export const getRentedDronesCount = () => async (dispatch) => {
    try {
        // start action
        dispatch({ type: RENTED_START });

    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });

    }

}

export const getRentedDrones = () => async (dispatch) => {
    try {

        // dispatch start of action to reducer
        dispatch({ type: RENTED_START });

        // make api call and save response
        const response = await axiosWithAuth().get(`/api/users/rented`);

        // dispatch success to reducer
        dispatch({ type: RENTED_SUCCESS, payload: response.data });

    } catch (err) {
        //dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });
    }

}

export const returnRentedDrone = (id) => async (dispatch) => {

    try {
        //dispatch start of action to reducer
        dispatch({ type: RENTED_START });

        // make api call and save response
        const response = await axiosWithAuth().put(`/api/users/rented/${id}`);

        //dispatch success to reducer
        dispatch({ type: RENTED_SUCCESS, payload: response.data })


    } catch (err) {

        // dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });
    }

}