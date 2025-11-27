
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
        <div className='signup-container'>
          <div className='signup-img'></div>
          <div className='signup-form-container'>
            <div className='signup-header'>
              <h1>Register New Account</h1>
            </div>
            <form className='signup-form' onSubmit={onFormSubmit}>
              <div className='signup-labels'>
                <h3>First Name:</h3>
                <h3>Last Name:</h3>
                <h3>email:</h3>
                <h3>password:</h3>
              </div>
              <div className='signup-txt-boxes'>
                <input
                  id='first_name'
                  type='text'
                  name='first_name'
                  required
                  placeholder='First Name'
                  onChange={onChangeInput}
                />
                <input
                  id='last_name'
                  type='text'
                  name='last_name'
                  required
                  placeholder='Last Name'
                  onChange={onChangeInput}
                />

              </div>


            </form>

          </div>

        </div>


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