/*
 * Author : Stephen Aranda
 * File   : owner-nav-bar.jsx 
 * Desc   : Single file component for the nav bar of Owner user type
 * */


import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getMarketDrones } from "../../state/actions/available-actions";
import { getMarketRentedDrones } from "../../state/actions/rented-actions";
import { getOwnersDrones } from "../../state/actions/owned-actions";

const OwnerNav = (props) => {

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

        // make api call to get the available drones
        props.getMarketDrones();

        // Then navigate to drone market
        navigate('/dashboard/owner-drone-market');
    }

    // handler to navigate to all drones that owner owns that 
    // are currently being rented by a renter
    const goToRentedDrones = (e) => {
        e.preventDefault();

        //make api call to get rented drones
        props.getMarketRentedDrones()

        // navigate to rented drones page
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

    // handler function to navigate to owned drones page
    const goToOwned = (e) => {
        e.preventDefault()

        // make api call to get all of owner's drones
        props.getOwnersDrones()

        // navigate to owners drones page
        navigate('/dashboard/owners-drones');
    }

    return (
        <nav className="nav-row">

            <button className="btn-nav" onClick={goToDash}>Dash</button>
            <button className="btn-nav" onClick={goToOwnerMarket}>Market </button>
            <button className="btn-nav" onClick={goToRentedDrones}>Rented</button>
            <button className="btn-nav" onClick={goToOwned}>Owned</button>
            <button className="btn-nav" onClick={goToAddDrone}>Add</button>
            <button className="btn-nav" onClick={logOut}>Log out</button>

        </nav>
    )


}

const mapDispatchToProps = { getMarketDrones, getMarketRentedDrones, getOwnersDrones }

export default connect(null, mapDispatchToProps)(OwnerNav);