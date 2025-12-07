/*
 * Author: Stephen Aranda
 * File  : owner-dashboard.jsx 
 * Desc  : Single file component for the dasbhoard of the Owner user type.
 */

import LoggedInNavigation from "../logged-in-navigation";
import { getMarketRentedDrones } from "../../state/actions/rented-actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const OwnerDashDashboard = (props) => {

    // fetch the number of rented drones of the user
    useEffect(() => {
        props.getMarketRentedDrones();
    }, [])

    return (
        <div className='dashboard'>
            <div className='mobile-owner-dashboard'></div>
            <LoggedInNavigation />

            <div className='owner-body'>
                <div className='dashboard-container'>
                    <div className='big-card-group'>
                        <div className='big-card'>
                            <div className='big-card-header'>
                                <h2>Profile</h2>
                                <div className='profile-img'></div>
                                <p>{props.login.message}</p>
                            </div>

                        </div>
                        <div className='big-card'>
                            <div className='big-card-header'>
                                <h2>Number of Drones Rented Out</h2>
                                <br></br>
                                <h2>
                                    {
                                        props.rented_loading ? <p>loading...</p> : props.rented.length
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        login_loading: state.loginReducer.loading,
        login_error: state.loginReducer.error,
        rented: state.rentedReducer.rentedDrones,
        rented_loading: state.rentedReducer.loading,
        rented_error: state.rentedReducer.error

    }
}

const mapDispatchToProps = { getMarketRentedDrones }


export default connect(mapStateToProps, mapDispatchToProps)(OwnerDashDashboard)