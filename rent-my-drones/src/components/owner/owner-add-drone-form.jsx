import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { postAddDrone } from "../../state/actions/owned-actions";
import '../../styles/add-drone.css';
import { useValidation } from "../../hooks/useValidation";
import AddDroneFormSchema from "../../formSchemas/add-drone-form-schema";

const AddDroneForm = (props) => {
    // Initial values and errors for Add Drone form component text boxes
    const initialValues = {
        drone_name: '',
        drone_description: '',
        drone_cost: 0.00,
        drone_url: ''
    }

    const initialErrors = {
        drone_name: '',
        drone_description: '',
        drone_cost: '',
        drone_url: ''
    }

    // State vars for navigation, errors, and add drone form
    const navigate = useNavigate();
    const [addDrone, errors, setAddDrone] = useValidation(AddDroneFormSchema, initialValues, initialErrors);


    // handler for changing input in text boxes
    const onChangeInput = (event) => {
        setAddDrone(event, AddDroneFormSchema);
    }

    // handler for form submission after add button is pressed.
    const onFormSubmit = (e) => {
        e.preventDefault()
        // api call to post add drone
        props.postAddDrone(addDrone);

        //navigate to dashboard
        navigate('/dashboard');
    }

    return (
        <div className='add-drone-container'>

            <div className='add-drone-form-container'>
                <div className='add-drone-header'>
                    <h1>Add Drone</h1>
                </div>
                <form className='add-drone-form' onSubmit={onFormSubmit}>
                    <div className='add-drone-group'>
                        <div className='add-drone-labels'>
                            <h3>Drone Name:</h3>
                            <h3>Drone Desc:</h3>
                            <h3>Drone Cost:</h3>
                            <h3>Drone URL :</h3>
                        </div>
                        <div className='add-drone-txt-boxes'>

                            <input
                                id='drone_name'
                                type='text'
                                name='drone_name'
                                required
                                placeholder='drone name'
                                onChange={onChangeInput}
                            />
                            <textarea
                                id="drone_description"
                                name="drone_description"
                                required
                                onChange={onChangeInput}
                                defaultValue='Please enter drone description...'>

                            </textarea>
                            <input
                                id='drone_cost'
                                type='number'
                                name='drone_cost'
                                required
                                placeholder='cost example 300.00'
                                onChange={onChangeInput}
                            />
                            <input
                                id='drone_url'
                                type='url'
                                name='drone_url'
                                required
                                placeholder='drone url for image'
                                onChange={onChangeInput}
                            />
                        </div>

                    </div>

                    <div className='add-drone-btn-container'>
                        <button type='submit' className='btn-submit btn-add-drone'>add-drone</button>
                    </div>
                    <div className='errors'>
                        <p>{errors.drone_name}</p>
                        <p>{errors.drone_description}</p>
                        <p>{errors.drone_cost}</p>
                        <p>{errors.drone_url}</p>
                    </div>
                </form>
            </div>
        </div>

    )


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