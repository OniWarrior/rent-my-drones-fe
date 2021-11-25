import React from "react";
import { Input,Form,Button } from "antd";
import '../styles/Signup.css'
import UnsignedNavigation from "./UnsignedNavigation";
import SignupFormSchema from '../formSchemas/SignupFormSchema'
import { useValidation } from "../hooks/useValidation";
import { useHistory } from "react-router";
import { useState } from "react";
import { register } from "../state/actions/SignupActions";
import { connect } from "react-redux";

const Signup =(props)=>{
  const {push} = useHistory()
  const [signup,errors,setSignup] = useValidation(SignupFormSchema)
  const initialDisabled = 1
  const [disabled,setDisabled] = useState(initialDisabled)

  const change=(event)=>{
    setSignup(event,SignupFormSchema)
  }
  
  const handleDisabled=(e)=>{
    e.preventDefault()
    if(signup.username.length >=12 && signup.password.length >=12){
      setDisabled(()=>({
        disabled: !disabled
      }))
    }
    else{
      setDisabled(()=>({
        disabled:disabled
      }))
    }
  }

  const onFormSubmit=(e)=>{
    e.preventDefault()
    props.register(signup,push)
  }

    return (
      <div>
        <UnsignedNavigation/>
        <div className="signup-container">
            <Form className = "container" onSubmitCapture={onFormSubmit}>
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
                  
                  <Button type='primary' htmlType='submit' disabled={handleDisabled} >Submit</Button>
                
                </div>
            </Form>
        </div>
      </div>
    )



}

const mapStateToProps =(state)=>{
  return{
    signup:state.signupReducer.signup,
    loading:state.signupReducer.loading,
    error:state.signupReducer.error
  }
}

const mapDispatchToProps = {register}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)