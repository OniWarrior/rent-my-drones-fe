

import '../../styles/renter-dashboard.css';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { getRentedDronesCount } from '../../state/actions/rented-actions';
import LoggedInNavigation from '../logged-in-navigation'

const RenterDashboard = (props) => {
    const navigate = useNavigate();

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
                                <h2>{props.rentedDrones}</h2>
                            </div>

                        </div>

                    </div>
                    <div className='big-card-group'>
                        <div className='big-card'>

                        </div>
                        <div className='big-card'>

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
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}


export default connect(mapStateToProps)(RenterDashboard)