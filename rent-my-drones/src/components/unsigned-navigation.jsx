

import { Row, Button } from 'antd';
import '../styles/Navigation.css'
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
            <Row className='navbar'>
                <Button onClick={goHome}>Home</Button>
                <Button onClick={goSignUp}>Sign Up</Button>
                <Button onClick={goLogin}>Login</Button>
            </Row>
        </div>
    )

}

export default UnsignedNavigation