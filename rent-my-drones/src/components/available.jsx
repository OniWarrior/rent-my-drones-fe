/*
 * Author: Stephen Aranda
 * File  : available.jsx 
 * Desc  : single file component that displays all the cards to rent available drones
 */

import LoggedInNavigation from "./logged-in-navigation";
import '../styles/available-comp.css'
import { connect } from "react-redux";

import AvailableCard from './available-card';


const Available = (props) => {


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
                            {
                                props.drones.map((drone) => {
                                    return <AvailableCard key={drone.drone_id} drone={drone} />

                                })
                            }

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



export default connect(mapStateToProps)(Available)