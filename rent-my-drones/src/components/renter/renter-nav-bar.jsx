/*
 * Author : Stephen Aranda
 * File   : renter-nav-bar.jsx 
 * Desc   : Single File Component of the navigation bar of the renter user type
 * */

import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { getAvailableDrones } from "../../state/actions/available-actions";
import { getRentedDrones } from "../../state/actions/rented-actions";


const RenterNav = (props) => {

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

        // get available drones
        props.getAvailableDrones();

        // navigate to available page after drones have been fetched.
        navigate('/dashboard/available');
    }

    // handler function for navigation to the rented drones section
    const goToRented = (e) => {
        e.preventDefault();

        // get rented drones
        props.getRentedDrones();

        // navigate to the rented page
        navigate('/dashboard/rented');
    }

    // handler function for navigation to renter dashboard
    const goToDash = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return (
        <nav className="nav-row">

            <button className="btn-nav" onClick={goToDash}>Dash</button>
            <button className="btn-nav" onClick={goToAvailable}>Available </button>
            <button className="btn-nav" onClick={goToRented}>Rented</button>
            <button className="btn-nav" onClick={logOut}>Log out</button>

        </nav>
    )

}

const mapDispatchToProps = { getAvailableDrones, getRentedDrones }

export default connect(null, mapDispatchToProps)(RenterNav);