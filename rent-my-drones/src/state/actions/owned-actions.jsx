import axiosWithAuth from "../../components/utils/axios-with-auth";

export const OWNED_START = 'OWNED_START'
export const OWNED_SUCCESS = 'OWNED_SUCCESS'
export const OWNED_FAILURE = 'OWNED_FAILURE'

/*
 * getOwnersDrones: api call to get all of the owner's drones whether or not they are rented
 *                     
 */
export const getOwnersDrones = () => async (dispatch) => {
    try {
        // start action
        dispatch({ type: OWNED_START });

        // make api call and store response
        const response = await axiosWithAuth().get('/api/users/all-drones');

        // dispatch success to reducer
        dispatch({ type: OWNED_SUCCESS, payload: response.data });

    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: OWNED_FAILURE, payload: err.message });

    }

}

/*
 * postAddDrone: api call for owner to add a drone
 */

export const postAddDrone = (drone) => async (dispatch) => {
    try {

        // dispatch start of action
        dispatch({ type: OWNED_START });

        // make api call to add drone
        const response = await axiosWithAuth().post('/api/users/add-drone', drone);

        // dispatch success to reducer
        dispatch({ type: OWNED_SUCCESS, payload: response.data })

        // alert pop of success message
        alert(`${response.data}`);

    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: OWNED_FAILURE, payload: err.message });

    }
}

