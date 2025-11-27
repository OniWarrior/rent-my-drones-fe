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
    const onchangeInput = (event) => {
        setLogin(event, LoginFormSchema);
    }

    // handler for form submission after login button is pressed.
    const onFormSubmit = () => {

        // api call to post login
        props.postLogin(login, navigate);
    }

    return (

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