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
                  <label htmlFor='username'>username</label>
                  <input 
                     id='username'
                     type='text'
                     placeholder='username'
                     required
                   />

                  <label htmlFor='password'>password</label>
                  <input
                    id='password'
                    type='password'
                    placeholder='password'
                    required
                  />

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