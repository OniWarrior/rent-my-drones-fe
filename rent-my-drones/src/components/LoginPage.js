import React from 'react'
import '../styles/Login.css'
import { Input,Form,Button } from "antd";
import { Link } from 'react-router-dom'
import UnsignedNavigation from './UnsignedNavigation'
import FormSchema from '../formSchemas/FormSchema'
import { useValidation } from "../hooks/useValidation";
import { useHistory } from "react-router";
import { useState } from "react";
import { connect } from "react-redux";



const LoginPage =()=>{

    return (
      <div>
        <UnsignedNavigation/>
        <div className="login-container">
            <Form className = "container">
                <h2>Login</h2>
                <div className='input-group'>
                <Form.Item name='username'  label='username'>
                  
                  <Input 
                   id='username'
                   type='text'
                   name='username'
                   placeholder='username'
                   required
                   onChange={change}
                 />
                  <div className='errors'>
                   <p>{errors.username}</p>
                                    
                  </div>
                </Form.Item>
                <Form.Item name='password' label='password'>
                <Input.Password
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  required
                  onChange={change}
                />        
                <div className='errors'>                    
                  <p>{errors.password}</p>                   
                </div>          
                </Form.Item>

                  <Button type='primary'>Login</Button>

                  <p>If you don't have an account
                  click <Link to='/Signup'>here</Link>
                  </p>
                </div>
            </Form>
        </div>
      </div>
    )

}

export default LoginPage