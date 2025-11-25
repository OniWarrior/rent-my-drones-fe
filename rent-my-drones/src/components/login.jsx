
/*
 * Author: Stephen Aranda
 * File  : login.jsx
 * Desc  : login component for the login page-This is the entire page.
 * */
import '../styles/login-comp.css';

import UnsignedNavigation from './unsigned-navigation';
import LoginFormSchema from '../formSchemas/login-form-schema';
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";
import { postLogin } from '../state/actions/login-actions';




const LoginPage = (props) => {

  // State vars for navigation, errors, and login
  const navigate = useNavigate();
  const [login, errors, setLogin] = useValidation(LoginFormSchema);


  // handler for changing input in text boxes
  const onchangeInput = (event) => {
    setLogin(event, LoginFormSchema);
  }




  // handler for form submission after login button is pressed.
  const onFormSubmit = () => {

    // api call to post login
    props.postLogin(login, navigate);
  }

  return (
    <div className='login'>
      <UnsignedNavigation />
      <div className="login-main">
        <div className='login-img'>
          <div className='login-container'>
            <div className='login-header'>
              <h1>Login</h1>
            </div>
            <form className='login-form' onSubmit={onFormSubmit}>
              <div className='input-group login-group'>
                <div className='login-labels'>
                  <h2>Email: </h2>
                  <h2>Password: </h2>
                </div>
                <div className='login-txt-boxes'>
                  <input
                    id='email'
                    type='text'
                    name='email'
                    required
                    placeholder='Email'
                    onChange={onchangeInput}
                  />
                  <input
                    id='password'
                    type='text'
                    name='password'
                    required
                    placeholder='Password'
                    onChange={onchangeInput}
                  />
                </div>
              </div>
              <div className='btn-container'>
                <button className='btn-submit btn-login' >Login</button>
              </div>

              <div className='errors'>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
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
    login: state.loginReducer.login,
    loading: state.loginReducer.loading,
    error: state.loginReducer.error
  }
}

const mapDispatchToProps = { postLogin }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)