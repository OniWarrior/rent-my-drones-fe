

import '../../styles/renter-dashboard.css';
import { useNavigate } from 'react-router';
import LoggedInNavigation from '../logged-in-navigation'

const RenterDashboard = () => {
    const navigate = useNavigate();

    const handleAvailable = (e) => {
        e.preventDefault();
        navigate('/dashboard/available');
    }

    const handleRented = (e) => {
        e.preventDefault();
        navigate('/dashboard/rented');
    }


    return (
        <div className='dashboard-container'>
            <LoggedInNavigation />
            <div className='dashboard-header'>
                <h1>Dashboard</h1>
            </div>
            <div className='dashboard-card-container'>
                <button className='dashboard-card available-card' onClick={handleAvailable}>Available</button>
                <button className='dashboard-card rented-card' onClick={handleRented}>Rented</button>
            </div>
        </div>
    )

}

export default RenterDashboard