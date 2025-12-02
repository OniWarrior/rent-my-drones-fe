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
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')
    }

    // handler function for navigation to the available market for drones
    const goToAvailable = (e) => {

    }

}

export default RenterNav;