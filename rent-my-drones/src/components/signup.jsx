
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

import { register } from "../state/actions/signup-actions";
import { connect } from "react-redux";

const Signup = (props) => {
  // local state var for navigation
  const navigate = useNavigate();

  // local state vars for signup and error values
  const [signup, errors, setSignup] = useValidation(SignupFormSchema);


  // handler function for input change in text boxes
  const onChangeInput = (event) => {
    setSignup(event, SignupFormSchema);
  }


  //handler function for handling form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    // make api call to register new account
    props.register(signup, navigate);
  }

  return (
    <div className='signup'>
      <UnsignedNavigation />
      <div className="signup-body">

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