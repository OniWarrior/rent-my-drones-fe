/*
 * Author: Stephen Aranda
 * File  : owner-dashboard.jsx 
 * Desc  : Single file component for the dasbhoard of the Owner user type.
 */

import LoggedInNavigation from "../logged-in-navigation";
import { connect } from "react-redux";

const OwnerDashDashboard = (props) => {

    // fetch the number of rented drones of the user
    useEffect(() => {
        props.getRentedDrones();
    }, [])

    return (
        <div className='dashboard'>
            <div className='mobile-dashboard'></div>
            <LoggedInNavigation />

            <div className='dashboard-body'>
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
                                <h2>Number of Rented Drones</h2>
                                <br></br>
                                <h2>
                                    {
                                        props.rented_loading ? <p>loading...</p> : props.rented.rented.length
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

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(OwnerDashDashboard)