
/*
 * Author: Stephen Aranda
 * File  : signup.jsx
 * Desc  : single component file for signup component that allows the
 *       : creation of a new user account for user type: Renter or Owner.
 */
import '../styles/signup-comp.css'
import UnsignedNavigation from "./unsigned-navigation";




const Signup = () => {


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