import axiosWitAuth from '../../components/utils/AxiosWithAuth'

export const AVAILABLE_START = 'AVAILABLE_START'
export const AVAILABLE_SUCCESS = 'AVAILABLE_SUCCESS'
export const AVAILABLE_FAILURE = 'AVAILABLE_FAILURE'


export const getAvailableDrones=()=>(dispatch)=>{
    dispatch({type:AVAILABLE_START})
    

}