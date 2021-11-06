import { Row } from 'antd'
import React from "react";
import {Row, Button } from 'antd';
import '../styles/Navigation.css'
import { useHistory } from 'react-router';



const UnsignedNavigation=()=>{
    const {push}=useHistory()
    const goHome=(e)=>{
        e.preventDefault()
        push('/')
    }

    const goLogin=(e)=>{
        e.preventDefault()
        push('/Login')
    }

    const goSignUp=(e)=>{
        e.preventDefault()
        push('/Signup')
    }
    return(
        <div className='nav-container'>
        <Row className='navbar'>          
               <Button onClick={goHome}>Home</Button>
               <Button onClick={goSignUp}>Sign Up</Button>
               <Button onClick={goLogin}>Login</Button>
        </Row>       
        </div>
    )

}

export default UnsignedNavigation