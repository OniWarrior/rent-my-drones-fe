/*
 * Author : Stephen Aranda
 * File   : renter-nav-bar.jsx 
 * Desc   : Single File Component of the navigation bar of the renter user type
 * */

import { useNavigate } from "react-router";



const RenterNav = () => {

    // state var for navigation.
    const navigate = useNavigate();

    // handler functin for logout
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }

    // handler function for navigation to the available market for drones
    const goToAvailable = (e) => {
        e.preventDefault();
        navigate('/dashboard/available');
    }

    // handler function for navigation to the rented drones section
    const goToRented = (e) => {
        e.preventDefault();
        navigate('/dashboard/rented');
    }

    // handler function for navigation to renter dashboard
    const goToDash = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return (
        <nav className="nav-row">

            <button className="btn-nav" onClick={goToDash}>Dashboard</button>
            <button className="btn-nav" onClick={goToAvailable}>Available </button>
            <button className="btn-nav" onClick={goToRented}>Rented</button>
            <button className="btn-nav" onClick={logOut}>Log out</button>

        </nav>
    )

}

export default RenterNav;