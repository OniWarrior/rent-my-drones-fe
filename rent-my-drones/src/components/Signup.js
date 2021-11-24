import React from "react";
import { Input,Form,Button } from "antd";
import '../styles/Signup.css'
import UnsignedNavigation from "./UnsignedNavigation";
import FormSchema from '../formSchemas/FormSchema'
import { useValidation } from "../hooks/useValidation";
import { useHistory } from "react-router";

const Signup =(props)=>{
  const {push} = useHistory()
  const [signup,errors,setSignup] = useValidation(FormSchema)

  const change=(event)=>{
    setSignup(event,FormSchema)
  }

  const onFormSubmit=(e)=>{
    e.preventDefault()
    props.register(signup,push)
  }

    return (
      <div>
        <UnsignedNavigation/>
        <div className="signup-container">
            <Form className = "container" onFinish={onFormSubmit}>
                <h2>Sign up</h2>
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
                  
                  </Form.Item>
                
                  <Button type='primary'htmlType='submit' >Submit</Button>
                  <div className='errors'>
                    <p>{errors.username}</p>
                    <p>{errors.password}</p>                   
                  </div>
                </div>
            </Form>
        </div>
      </div>
    )



}

export default Signup