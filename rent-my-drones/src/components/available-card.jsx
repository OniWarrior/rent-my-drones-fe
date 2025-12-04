/*
 * Author: Stephen Aranda
 * File  : available-card.jsx 
 * Desc  : card component for the avaialble component. Used to display the information
 *       : of a drone and allow a user to rent by pressing the rent button.
 */
import '../styles/available-card.css';
import { rentAvailableDrone } from '../state/actions/available-actions';
import { connect } from "react-redux";


const AvailableCard = (props) => {

    // created handler function for form submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        // make api call to rent drone after rent button is pressed
        props.rentAvailableDrone(props.drone_id);

    }





    return (
        <div className="available-card">
            <form className='available-card-form' onSubmit={onFormSubmit}>
                <img src={props.drone_image} alt='Card of item' />
                <h2>{props.drone_name}</h2>
                <p>{props.drone_description}</p>
                <p>{props.drone_cost}</p>
                <button>Rent Drone</button>

            </form>

        </div>
    )

}

const mapDispatchToProps = { rentAvailableDrone }

export default connect(null, mapDispatchToProps)(AvailableCard);