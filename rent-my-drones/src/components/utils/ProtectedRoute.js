import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const ProtectedRoute = ({component,...rest})=>{
    if(localStorage.getItem('token')){
        return(<Route component={component} {...rest}/>)
    }
    else{
        return(<Redirect to='/Login'/>)
    }

}

export default ProtectedRoute