import axios from "axios"


export const LOGIN_START="LOGIN_START"
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAILURE='LOGIN_FAILURE'


export const postLogin=(e,login,push)=>(dispatch)=>{
    e.preventDefault()
    dispatch({type:LOGIN_START})
    axios.post(`https://rent-my-drones-be.herokuapp.com/api/auth/Login`,login)
    .then((success)=>{
        dispatch({type:LOGIN_SUCCESS,payload:success.data})
        push('/Dashboard')          
    })
    .catch(err=>{
        dispatch({type:LOGIN_FAILURE,payload:err.message})

    })

}


