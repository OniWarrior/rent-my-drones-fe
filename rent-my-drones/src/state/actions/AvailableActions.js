import axiosWithAuth from '../../components/utils/AxiosWithAuth'


export const AVAILABLE_START = 'AVAILABLE_START'
export const AVAILABLE_SUCCESS = 'AVAILABLE_SUCCESS'
export const AVAILABLE_FAILURE = 'AVAILABLE_FAILURE'


export const getAvailableDrones=()=>(dispatch)=>{
    dispatch({type:AVAILABLE_START})
    axiosWithAuth().get('https://rent-my-drones-be.herokuapp.com/api/users/available')
    .then(success=>{
        dispatch({type:AVAILABLE_SUCCESS,payload:success.data})        
    })
    .catch(err=>{

    })

}