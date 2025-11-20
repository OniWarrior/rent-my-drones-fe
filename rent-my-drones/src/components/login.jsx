
import '../styles/login.css';
import { Input, Form, Button } from "antd";
import { Link } from 'react-router-dom';
import UnsignedNavigation from './unsigned-navigation';
import LoginFormSchema from '../formSchemas/login-form-schema';
import { useValidation } from "../hooks/useValidation";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { connect } from "react-redux";
import { postLogin } from '../state/actions/login-actions';




const LoginPage = (props) => {

  const navigate = useNavigate();
  const [login, errors, setLogin] = useValidation(LoginFormSchema);
  const initialDisabled = true;
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (event) => {
    setLogin(event, LoginFormSchema);
  }

  const handleDisabled = (e) => {
    e.preventDefault();
    if (login.username.length >= 12 && login.password.length >= 12) {
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

  const onFormSubmit = () => {

    props.postLogin(login, navigate);
  }

  return (
    <div>
      <UnsignedNavigation />
      <div className="login-container">
        <Form className="container" onSubmitCapture={onFormSubmit}>
          <h2>Login</h2>
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

            <Button type='primary' htmlType='submit' disabled={handleDisabled}>Login</Button>

            <p>If you don't have an account
              click <Link to='/Signup'>here</Link>
            </p>
          </div>
        </Form>
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