

import { useNavigate } from "react-router";
import '../styles/nav-comp.css'

const LoggedInNavigation = () => {



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