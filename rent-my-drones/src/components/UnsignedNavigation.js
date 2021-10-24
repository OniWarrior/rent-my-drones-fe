import { Row } from 'antd'
import React from "react";
import {Link} from 'react-router-dom'
import {HomeOutlined,PlusCircleOutlined,LoginOutlined} from '@ant-design/icons'
import '../styles/Navigation.css'



const UnsignedNavigation=()=>{

    return(
        <div className='nav-container'>
        <Row className='navbar'>          
               <Link to='/'><HomeOutlined/></Link>          
               <Link to = '/SignUp'><PlusCircleOutlined/></Link>           
               <Link to ='/Login'><LoginOutlined/></Link>        
        </Row>
        <Row className='nav-names'>
            <h6>Home</h6>
            <h6>Sign Up</h6>
            <h6>Login</h6>
        </Row>
        </div>
    )

}

export default UnsignedNavigation