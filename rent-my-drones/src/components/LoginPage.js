import React from 'react'
import '../styles/Login.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import UnsignedNavigation from './UnsignedNavigation'



const LoginPage =()=>{

    return (
      <div>
        <UnsignedNavigation/>
        <div className="login-container">
            <form className = "container">
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
            </form>
        </div>
      </div>
    )

}

export default LoginPage