


import '../styles/navigation.css'
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
                <div className="btn-nav btn-home" onClick={goHome}>Home</div>
                <div className="btn-nav btn-login" onClick={goLogin}>Login</div>
                <div className="btn-nav btn-signup" onClick={goSignUp}>Signup</div>
            </nav>
        </div>
    )

}

export default UnsignedNavigation