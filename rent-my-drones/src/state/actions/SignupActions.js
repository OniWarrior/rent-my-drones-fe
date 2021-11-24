import axios from "axios"

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS='SIGNUP_SUCCESS'
export const SIGNUP_FAILURE='SIGNUP_FAILURE'


export const register=(signup,push)=>(dispatch)=>{
    dispatch({type:SIGNUP_START})
    axios.post(`https://rent-my-drones-be.herokuapp.com/api/auth/Signup`,signup)

}

