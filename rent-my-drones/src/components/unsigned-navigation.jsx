


import '../styles/nav-comp.css'
import { useNavigate } from "react-router";


const UnsignedNavigation = () => {
    const navigate = useNavigate();
    const goHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const goLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const goSignUp = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    return (
        <div className='nav-container'>
            <nav className='nav-row'>
                <button className="btn-nav nav-home" onClick={goHome}>Home</button>
                <button className="btn-nav nav-login" onClick={goLogin}>Login</button>
                <button className="btn-nav nav-signup" onClick={goSignUp}>Signup</button>
            </nav>
        </div>
    )

}

export default UnsignedNavigation