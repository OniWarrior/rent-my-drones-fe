
/*
 * Author: Stephen Aranda
 * File  : login.jsx
 * Desc  : login component for the login page-This is the entire page.
 * */
import '../styles/login-comp.css';

import UnsignedNavigation from './unsigned-navigation';

const LoginPage = (props) => {



  return (


    <div className='login'>
      <UnsignedNavigation />
      <div className="login-body">
        <LoginFormContainer />
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