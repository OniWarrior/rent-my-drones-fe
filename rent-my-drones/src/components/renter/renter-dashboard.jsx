

import '../../styles/renter-dashboard.css';
import { useNavigate } from 'react-router';
import LoggedInNavigation from '../logged-in-navigation'

const RenterDashboard = () => {
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

                            </div>

                        </div>
                        <div className='big-card'>
                            <div className='big-card-header'>
                                <h2>Number of Drones</h2>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>
    )

}

export default RenterDashboard