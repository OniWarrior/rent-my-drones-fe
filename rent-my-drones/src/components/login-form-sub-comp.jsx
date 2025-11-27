/*
 * Author : Stephen Aranda
 * File   : login-form-sub-comp.jsx
 * Desc   : sub component for the login component. Contains the form container of login 
 * */

import LoginFormSchema from '../formSchemas/login-form-schema';
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";
import { postLogin } from '../state/actions/login-actions';

const LoginFormContainer = (props) => {
    // State vars for navigation, errors, and login
    const navigate = useNavigate();
    const [login, errors, setLogin] = useValidation(LoginFormSchema);


    // handler for changing input in text boxes
    const onChangeInput = (event) => {
        setLogin(event, LoginFormSchema);
    }

    // handler for form submission after login button is pressed.
    const onFormSubmit = () => {

        // api call to post login
        props.postLogin(login, navigate);
    }

    return (
        <div className='login-container'>
            <div className='login-img'></div>
            <div className='login-form-container'>
                <div className='login-header'>
                    <h1>Login</h1>
                </div>
                <form className='login-form' onSubmit={onFormSubmit}>
                    <div className='login-group'>
                        <div className='login-labels'>
                            <h3>email:</h3>
                            <h3>password:</h3>
                        </div>
                        <div className='login-txt-boxes'>

                            <input
                                id='email'
                                type='text'
                                name='email'
                                required
                                placeholder='Email'
                                onChange={onChangeInput}
                            />
                            <input
                                id='password'
                                type='text'
                                name='password'
                                required
                                placeholder='Password'
                                onChange={onChangeInput}
                            />
                        </div>

                    </div>

                    <div className='login-btn-container'>
                        <button type='submit' className='btn-submit btn-login'>Login</button>
                    </div>
                    <div className='errors'>
                        <p>{errors.email}</p>
                        <p>{errors.password}</p>
                    </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)