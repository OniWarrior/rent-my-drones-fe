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
        navigate('/dashboard');
    }

    // handler to navigate to all drones that owner owns that are
    // available to rent
    const goToOwnerMarket = (e) => {
        e.preventDefault();
        navigate('/dashboard/owner-drone-market');
    }

    // handler to navigate to all drones that owner owns that 
    // are currently being rented by a renter
    const goToRentedDrones = (e) => {
        e.preventDefault();
        navigate('/dashboard/owner-rented-drones');
    }

    // handler to navigate to adding a drone page
    const goToAddDrone = (e) => {
        e.preventDefault();
        navigate('/dashboard/add-drone');
    }

    // handler functin for logout
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <nav className="nav-row">

            <button className="btn-nav" onClick={goToDash}>Dash</button>
            <button className="btn-nav" onClick={goToOwnerMarket}>Available </button>
            <button className="btn-nav" onClick={goToRentedDrones}>Rented</button>
            <button className="btn-nav" onClick={goToAddDrone}>Add Drone</button>
            <button className="btn-nav" onClick={logOut}>Log out</button>

        </nav>
    )


}

export default OwnerNav;