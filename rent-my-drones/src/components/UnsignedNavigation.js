import { Menu } from 'antd'
import React from "react";
import {Link} from 'react-router-dom'
import {HomeOutlined,PlusCircleOutlined,LoginOutlined} from '@ant-design/icons'




const UnsignedNavigation=()=>{

    return(
        <Menu mode='horizontal'>
           <Menu.Item>
               <Link to='/'><HomeOutlined/></Link>
               <h2>Home</h2>
           </Menu.Item>
           <Menu.Item>
               <Link to = '/SignUp'><PlusCircleOutlined/></Link>
               <h2>SignUp</h2>
           </Menu.Item>
           <Menu.Item>
               <Link to ='/Login'><LoginOutlined/></Link>
               <h2>Login</h2>
           </Menu.Item>
        </Menu>
    )

}

export default UnsignedNavigation