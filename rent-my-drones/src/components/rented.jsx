/*
 * Author: Stephen Aranda
 * File  : rented.jsx 
 * Desc  : single file component that displays all the cards to return rented drones
 */

import LoggedInNavigation from "./logged-in-navigation";
import '../styles/rented-comp.css'
import { connect } from "react-redux";
import {
    getRentedDrones

} from '../state/actions/rented-actions';
import RentedCard from './rented-card';

const Rented = (props) => {

    // if loading
    if (props.loading) {
        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className='rented-header'>
                    <h1>Rented Drones</h1>
                    <h2>...Loading</h2>
                </div>

            </div>)
    }
    // if all drones are available and none are rented
    else if (props.drones.length === 0) {
        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className='rented-header'>
                    <h1>Rented Drones</h1>
                    <h2>No Rented Drones</h2>
                </div>
            </div>
        )
    }
    // otherwise, render the entire component along with all the drones that were rented.
    else {

        return (
            <div className='rented'>
                <LoggedInNavigation />
                <div className="rented-body">

                    <div className="rented-container">
                        <div className='rented-header'>
                            <h1>Rented Drones</h1>
                        </div>
                        <div className="card-container">
                            {
                                props.drones.map((drone) => {
                                    return <RentedCard key={drone.drone_id} drone={drone} />

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
        rentedDrones: state.rentedReducer.rentedDrones,
        loading: state.rentedReducer.loading,
        error: state.rentedReducer.error
    }

}

const mapDispatchToProps = { getRentedDrones }
export default connect(mapStateToProps, mapDispatchToProps)(Rented)