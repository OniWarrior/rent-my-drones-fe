import axiosWithAuth from "../../components/utils/AxiosWithAuth"

export const LOGIN_START="LOGIN_START"
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAILURE='LOGIN_FAILURE'


export const postLogin=(e,login,push)=>(dispatch)=>{
    dispatch({type:LOGIN_START})

}


