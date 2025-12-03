/*
 * Author : Stephen Aranda
 * File   : owner-nav-bar.jsx 
 * Desc   : Single file component for the nav bar of Owner user type
 * */

import { useNavigate } from "react-router";

const OwnerNav = () => {

    // local var for navigation
    const navigate = useNavigate();


    // handler to navigate back to dashboard
    const goToDash = (e) => {
        e.preventDefault();
        navigate('/owner-dashboard');
    }


}

export default OwnerNav;