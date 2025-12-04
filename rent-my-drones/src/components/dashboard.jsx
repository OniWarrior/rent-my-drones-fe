/*
 * Author: Stephen Aranda
 * File  : dashboard.jsx 
 * Desc  : Single file component that acts as a super component to make decision
 *       : to render dashboard sub component depending on user type.
 * */

import RenterDashboard from './renter/renter-dashboard';
import OwnerDashboard from './owner/owner-dashboard';
import { connect } from 'react-redux';

const Dashboard = (props) => {

}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}

export default connect(mapStateToProps)(Dashboard);