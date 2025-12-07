/*
 * Author: Stephen Aranda
 * File  : owner-market.jsx 
 * Desc  : Single file component that shows all of the drones that belong to the owner
 *       : that are market for the Renter user types to rent
 */

import LoggedInNavigation from '../logged-in-navigation';
import { connect } from 'react-redux';
// TODO - ADD IMPORT FOR MARKET CARD
import '../../styles/market-comp.css';
import MarketCard from './owner-market-card';

const Market = (props) => {
    // if loading
    if (props.loading) {
        return (
            <div className='market'>
                <LoggedInNavigation />
                <div className='market-header'>
                    <h1>Market Drones</h1>
                    <h2>...Loading</h2>
                </div>

            </div>)
    }
    // if all drones are rented and none are market
    else if (props.drones.length === 0) {
        return (
            <div className='market'>
                <LoggedInNavigation />
                <div className='market-header'>
                    <h1>Market Drones</h1>
                    <h2>No market Drones</h2>
                </div>
            </div>
        )
    }
    // otherwise, render the entire component along with all the drones market for rent.
    else {

        return (
            <div className='market'>
                <LoggedInNavigation />
                <div className="market-body">

                    <div className="market-container">
                        <div className='market-header'>
                            <h1>Market Drones</h1>
                            <h2>Owner's Drones That are Available to Rent</h2>
                        </div>
                        <div className="card-container">
                            {
                                props.drones.map((drone) => {
                                    return <MarketCard key={drone.drone_id} drone={drone} />

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
        drones: state.marketReducer.drones,
        loading: state.marketReducer.loading,
        error: state.marketReducer.error
    }
}



export default connect(mapStateToProps)(Market)