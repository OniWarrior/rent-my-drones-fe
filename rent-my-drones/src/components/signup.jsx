
/*
 * Author: Stephen Aranda
 * File  : signup.jsx
 * Desc  : single component file for signup component that allows the
 *       : creation of a new user account for user type: Renter or Owner.
 */
import '../styles/signup-comp.css'
import UnsignedNavigation from "./unsigned-navigation";
import signupFormSubComp from './signup-form-sub-comp';




const Signup = () => {


  return (
    <div className='signup'>
      <UnsignedNavigation />
      <div className="signup-body">



      </div>
    </div>
  )



}

export default Signup;