import React from "react";
import { Button } from "antd";
import '../styles/Signup.css'
import UnsignedNavigation from "./UnsignedNavigation";

const Signup =()=>{

    return (
      <div>
        <UnsignedNavigation/>
        <div className="signup-container">
            <form className = "container">
                <h2>Sign up</h2>
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
      </div>
    )



}

export default Signup