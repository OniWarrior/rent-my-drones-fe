import axiosWithAuth from "../../components/utils/AxiosWithAuth";

export const RENTED_START='RENTED_START'
export const RENTED_SUCCESS='RENTED_SUCCESS'
export const RENTED_FAILURE='RENTED_FAILURE'

export const getRentedDrones=()=>(dispatch)=>{
    dispatch({type:RENTED_START})
    axiosWithAuth().get(`/api/users/rented`)
    .then(success=>{
        dispatch({type:RENTED_SUCCESS,payload:success.data})
    })
    .catch(err=>{
        dispatch({type:RENTED_FAILURE,payload:err.message})
    })

}

export const returnRentedDrone=(id)=>(dispatch)=>{
    dispatch({type:RENTED_START})
    axiosWithAuth().put(`/api/users/rented/${id}`)

}