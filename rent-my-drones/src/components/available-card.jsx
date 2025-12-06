/*
 * Author: Stephen Aranda
 * File  : available-card.jsx 
 * Desc  : card component for the avaialble component. Used to display the information
 *       : of a drone and allow a user to rent by pressing the rent button.
 */
import '../styles/available-card.css';
import { rentAvailableDrone } from '../state/actions/available-actions';
import { connect } from "react-redux";
import { useNavigate } from 'react-router';


const AvailableCard = (props) => {

    // nav var to navigate back to dashboard
    const navigate = useNavigate();


    // created handler function for form submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        // make api call to rent drone after rent button is pressed
        props.rentAvailableDrone(props.drone.drone_id);

        // after successful rent, then navigate to dashboard.
        navigate('/dashboard');

    }





    return (
        <div className="available-card">
            <form className='available-card-form' onSubmitCapture={onFormSubmit}>
                <div className='available-card-img-container'>
                    <img className="available-card-img" src={props.drone.drone_image} alt='Card of item' />
                </div>
                <div className='available-card-info-container'>
                    <h2>{props.drone.drone_name}</h2>
                    <p>{props.drone.drone_description}</p>
                    <p>$ {props.drone.drone_cost}</p>
                    <button className='btn-submit btn-rent'>Rent Drone</button>

                </div>


            </form>

        </div>
    )

}

const mapDispatchToProps = { rentAvailableDrone }

export default connect(null, mapDispatchToProps)(AvailableCard);