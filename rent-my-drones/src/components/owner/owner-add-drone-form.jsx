import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { postAddDrone } from "../../state/actions/owned-actions";
import '../../styles/add-drone.css';
import { useValidation } from "../../hooks/useValidation";
import AddDroneFormSchema from "../../formSchemas/add-drone-form-schema";

const AddDroneForm = (props) => {

}

const mapStateToProps = (state) => {
    return {
        drone: state.ownedReducer.drones,
        loading: state.ownedReducer.loading,
        error: state.ownedReducer.error
    }
}

const mapDispatchToProps = { postAddDrone }

export default connect(mapStateToProps, mapDispatchToProps)(AddDroneForm);