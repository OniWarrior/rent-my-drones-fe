/*
 * Author: Stephen Aranda
 * File  : owner-market.jsx 
 * Desc  : Single file component that shows all of the drones that belong to the owner
 *       : that are available for the Renter user types to rent
 */

import LoggedInNavigation from '../logged-in-navigation';
import { connect } from 'react-redux';
// TODO - ADD IMPORT FOR MARKET CARD
import '../../styles/market-comp.css';

const Market = (props) => {

}

const mapStateToProps = (state) => {
    return {
        drones: state.availableReducer.drones,
        loading: state.availableReducer.loading,
        error: state.availableReducer.error
    }
}



export default connect(mapStateToProps)(Available)