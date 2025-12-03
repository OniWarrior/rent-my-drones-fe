

import '../../styles/renter-dashboard.css';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { getRentedDronesCount } from '../../state/actions/rented-actions';
import LoggedInNavigation from '../logged-in-navigation'
import { useEffect } from 'react';

const RenterDashboard = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        // make api call to get drone count
        props.getRentedDronesCount();

    }, [])




    // handler for available button
    const handleAvailable = (e) => {
        e.preventDefault();
        navigate('/renter-dashboard/available');
    }

    // handler for rented button
    const handleRented = (e) => {
        e.preventDefault();
        navigate('/renter-dashboard/rented');
    }


    return (
        <div className='dashboard'>
            <LoggedInNavigation />
            <div className='dashboard-body'>
                <div className='dashboard-container'>
                    <div className='big-card-group'>
                        <div className='big-card'>
                            <div className='big-card-header'>
                                <h2>Profile</h2>
                                <div className='profile-img'></div>
                                <h2>{props.login.message}</h2>
                            </div>

                        </div>
                        <div className='big-card'>
                            <div className='big-card-header'>
                                <h2>Number of Rented Drones</h2>
                                <br></br>
                                <h2>{props.rented_loading ? <p>loading...</p> : props.rented}</h2>
                            </div>

                        </div>

                    </div>
                    <div className='big-card-group'>
                        <div className='big-card' onClick={handleAvailable}>

                        </div>
                        <div className='big-card' onClick={handleRented}>

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

const mapDispatchToProps = { getRentedDronesCount }


export default connect(mapStateToProps, mapDispatchToProps)(RenterDashboard)