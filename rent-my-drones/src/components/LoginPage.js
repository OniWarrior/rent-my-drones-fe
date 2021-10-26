import React from 'react'
import '../styles/Login.css'
import { Button } from 'antd'



const LoginPage =()=>{

    return (
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

                  <Button type='primary'>Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default LoginPage