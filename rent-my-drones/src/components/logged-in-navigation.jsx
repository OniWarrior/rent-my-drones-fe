

import RenterNav from "./renter/renter-nav-bar";
import { connect } from "react-redux";
import '../styles/nav-comp.css'

const LoggedInNavigation = (props) => {

    // get the role 
    const role = localStorage.getItem('role');

    // check what role
    switch (role) {
        case "Renter": return (<div className="nav-container">

        </div>)
    }




}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}



export default connect(mapStateToProps)(LoggedInNavigation);