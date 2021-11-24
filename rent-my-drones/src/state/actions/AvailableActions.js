import axiosWithAuth from '../../components/utils/AxiosWithAuth'


export const AVAILABLE_START = 'AVAILABLE_START'
export const AVAILABLE_SUCCESS = 'AVAILABLE_SUCCESS'
export const AVAILABLE_FAILURE = 'AVAILABLE_FAILURE'


export const getAvailableDrones=()=>(dispatch)=>{
    dispatch({type:AVAILABLE_START})
    axiosWithAuth().get(`/api/users/available`)
    .then(success=>{
        dispatch({type:AVAILABLE_SUCCESS,payload:success.data})        
    })
    .catch(err=>{
        dispatch({type:AVAILABLE_FAILURE,payload:err.message})
    })

}

export const rentAvailableDrone=(id,isRented)=>(dispatch)=>{
    dispatch({type:AVAILABLE_START})
    axiosWithAuth().put(`/api/users/available/${id}`,isRented)
    .then(success=>{
        
    })

}