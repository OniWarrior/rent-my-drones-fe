
/*
 * Author: Stephen Aranda
 * File  : signup.jsx
 * Desc  : single component file for signup component that allows the
 *       : creation of a new user account for user type: Renter or Owner.
 */
import '../styles/signup-comp.css'
import UnsignedNavigation from "./unsigned-navigation";
import SignupFormSchema from '../formSchemas/signup-form-schema'
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from "react-router";
import { useState } from "react";
import { register } from "../state/actions/signup-actions";
import { connect } from "react-redux";

const Signup = (props) => {
  // local state var for navigation
  const navigate = useNavigate();

  const [signup, errors, setSignup] = useValidation(SignupFormSchema);


  // handler function for input change in text boxes
  const onChangeInput = (event) => {
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
    <div className='signup'>
      <UnsignedNavigation />
      <div className="signup-container">

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