

import '../styles/signup.css'
import UnsignedNavigation from "./unsigned-navigation";
import SignupFormSchema from '../formSchemas/signup-form-schema'
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from "react-router";
import { useState } from "react";
import { register } from "../state/actions/signup-actions";
import { connect } from "react-redux";

const Signup = (props) => {
  const navigate = useNavigate();
  const [signup, errors, setSignup] = useValidation(SignupFormSchema);
  const initialDisabled = 1;
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (event) => {
    setSignup(event, SignupFormSchema);
  }

  const handleDisabled = (e) => {
    e.preventDefault();
    if (signup.username.length >= 12 && signup.password.length >= 12) {
      setDisabled(() => ({
        disabled: !disabled
      }))
    }
    else {
      setDisabled(() => ({
        disabled: disabled
      }))
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.register(signup, navigate);
  }

  return (
    <div>
      <UnsignedNavigation />
      <div className="signup-container">
        {/* 
        <Form className="container" onSubmitCapture={onFormSubmit}>
          <h2>Sign up</h2>
          <div className='input-group'>

            <Form.Item name='username' label='username'>

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
        */}
      </div>
    </div>
  )



}

const mapStateToProps = (state) => {
  return {
    signup: state.signupReducer.signup,
    loading: state.signupReducer.loading,
    error: state.signupReducer.error
  }
}

const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)