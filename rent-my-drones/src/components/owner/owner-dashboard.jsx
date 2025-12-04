/*
 * Author: Stephen Aranda
 * File  : owner-dashboard.jsx 
 * Desc  : Single file component for the dasbhoard of the Owner user type.
 */

import loggedInNavigation from "../logged-in-navigation";
import { connect } from "react-redux";

const OwnerDashDashboard = (props) => {

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