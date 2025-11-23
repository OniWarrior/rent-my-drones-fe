

import { useNavigate } from "react-router";
import '../styles/navigation.css'

const LoggedInNavigation = () => {
    const navigate = useNavigate();

    const goToDashboard = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    const goToAvailable = (e) => {
        e.preventDefault()
        navigate('/dashboard/available')
    }

    const goToRented = (e) => {
        e.preventDefault()
        navigate('/dashboard/rented')
    }

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <button onClick={goToDashboard}>Dashboard</button>
                <button onClick={goToAvailable}>Available </button>
                <button onClick={goToRented}>Rented</button>
                <button onClick={logOut}>Log out</button>
            </nav>
        </div>
    )

}

export default LoggedInNavigation