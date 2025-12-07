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

        // make api call and store response
        const response = await axiosWithAuth().get('/api/users/renter-total-rented');

        // dispatch success to reducer
        dispatch({ type: RENTED_SUCCESS, payload: response.data });

    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });

    }

}

/*
 * getRentedDrones: api call that will get the rented drones of the Renter user type
 * */
export const getRentedDrones = () => async (dispatch) => {
    try {

        // dispatch start of action to reducer
        dispatch({ type: RENTED_START });

        // make api call and save response
        const response = await axiosWithAuth().get(`/api/users/rented`);

        // dispatch success to reducer
        dispatch({ type: RENTED_SUCCESS, payload: response.data.rented });

    } catch (err) {
        //dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });
    }

}

/*
 * returnRentedDrone: api call that will return a rented drone using id. for Renter user type.
 */
export const returnRentedDrone = (id) => async (dispatch) => {

    try {
        //dispatch start of action to reducer
        dispatch({ type: RENTED_START });

        // make api call and save response
        const response = await axiosWithAuth().put(`/api/users/rented/${id}`);

        //dispatch success to reducer
        dispatch({ type: RENTED_SUCCESS, payload: response.data });

        //alert  success message
        alert(`${response.data.message}`);


    } catch (err) {

        // dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });
    }

}

/*
 * getMarketRentedDrones: api call that retrieves the drones
 *                      : of the owner that have been rented out to Renter user types.
 */
export const getMarketRentedDrones = () => async (dispatch) => {
    try {
        // dispatch start of action
        dispatch({ type: RENTED_START });

        // make api call to get rented drones 
        const response = await axiosWithAuth().get('/api/users/rented-drones');

        // dispatch success to reducer

    } catch (err) {
        // dispatch failure to reducer
        dispatch({ type: RENTED_FAILURE, payload: err.message });
    }
}