import { useEffect, useState } from "react";

import LoggedInNavigation from "./logged-in-navigation";
import '../styles/available-comp.css'
import { connect } from "react-redux";
import { getAvailableDrones, rentAvailableDrone } from "../state/actions/available-actions";


const Available = (props) => {



    // var for rent button
    const initialValue = false;
    const [isRented, setIsRented] = useState(initialValue);

    // call in all available drones
    useEffect(() => {
        props.getAvailableDrones();
        // eslint-disable-next-line
    }, [isRented])

    // handler for the rent button
    const handleRentButton = (e, id) => {
        e.preventDefault();

        // make api call to rent drone
        props.rentAvailableDrone(id);

        // change state of rent button to trigger useEffect
        setIsRented(() => ({ isRented: !isRented }));



    }

    // if loading
    if (props.loading) {
        return (
            <div className='available'>
                <LoggedInNavigation />
                <div className='available-header'>
                    <h1>Available Drones</h1>
                    <h2>...Loading</h2>
                </div>

            </div>)
    }
    // if all drones are rented and none are available
    else if (props.drones.length === 0) {
        return (
            <div className='available'>
                <LoggedInNavigation />
                <div className='available-header'>
                    <h1>Available Drones</h1>
                    <h2>No Available Drones</h2>
                </div>
            </div>
        )
    }
    // otherwise, render the entire component along with all the drones available for rent.
    else {

        return (
            <div className='available'>
                <LoggedInNavigation />
                <div className="available-body">

                    <div className="available-container">
                        <div className='available-header'>
                            <h1>Available Drones</h1>
                        </div>
                        <div className="card-container">

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drones: state.availableReducer.drones,
        loading: state.availableReducer.loading,
        error: state.availableReducer.error
    }
}

const mapDispatchToProps = { getAvailableDrones, rentAvailableDrone }

export default connect(mapStateToProps, mapDispatchToProps)(Available)