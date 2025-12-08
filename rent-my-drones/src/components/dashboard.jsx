/*
 * Author: Stephen Aranda
 * File  : dashboard.jsx 
 * Desc  : Single file component that acts as a super component to make decision
 *       : to render dashboard sub component depending on user type.
 * */

import RenterDashboard from './renter/renter-dashboard';
import OwnerDashboard from './owner/owner-dashboard';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router';


const Dashboard = () => {
    const navigate = useNavigate();

    // get the role
    const role = localStorage.getItem('role');

    switch (role) {
        case "Renter": return (
            <RenterDashboard />
        );
        case "Owner": return (
            <OwnerDashboard />
        );
        default:
            navigate('/')

    }




}

export default Dashboard;