import { Menu } from 'antd'
import React from "react";
import {Link} from 'react-router-dom'




const UnsignedNavigation=()=>{

    return(
        <Menu mode='horizontal'>
           <Menu.Item><Link to='/'>Home</Link></Menu.Item>
           <Menu.Item><Link to = '/SignUp'>Sign Up</Link></Menu.Item>
           <Menu.Item><Link to ='/Login'>Login</Link></Menu.Item>
        </Menu>
    )

}

export default UnsignedNavigation