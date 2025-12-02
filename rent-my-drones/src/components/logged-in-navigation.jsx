

import { useNavigate } from "react-router";
import { connect } from "react-redux";
import '../styles/nav-comp.css'

const LoggedInNavigation = (props) => {


}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}



export default connect(mapStateToProps)(LoggedInNavigation);