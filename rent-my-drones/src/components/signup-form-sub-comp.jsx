/*
 * Author : Stephen Aranda
 * File   : signup-form-sub-comp.jsx 
 * Desc   : sub component fo signup.jsx. Represents the container for the form
 */

const SignupFormContainer = () => {


    return (
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
                    <div className='signup-btn-container'>
                        <button type='submit' className='btn-submit btn-signup'>Register</button>
                    </div>
                    <div className='errors'>
                        <p>{errors.first_name}</p>
                        <p>{errors.last_name}</p>
                        <p>{errors.email}</p>
                        <p>{errors.password}</p>
                    </div>


                </form>

            </div>

        </div>

    )


}

export default SignupFormContainer;