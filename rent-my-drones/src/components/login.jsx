
/*
 * Author: Stephen Aranda
 * File  : login.jsx
 * Desc  : login component for the login page-This is the entire page.
 * */
import '../styles/login-comp.css';

import UnsignedNavigation from './unsigned-navigation';
import LoginFormContainer from './login-form-sub-comp';
const LoginPage = () => {



  return (


    <div className='login'>
      <UnsignedNavigation />
      <div className="login-body">
        <LoginFormContainer />
      </div>
    </div>
  )


}



export default LoginPage;