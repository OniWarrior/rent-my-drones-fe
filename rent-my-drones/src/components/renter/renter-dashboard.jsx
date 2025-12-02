

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
        <div className='dashboard-container'>
            <LoggedInNavigation />
            <div className='dashboard-body'>

            </div>

        </div>
    )

}

export default RenterDashboard