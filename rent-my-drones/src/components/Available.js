import React from "react";
import { Button } from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Available.css'
import { connect } from "react-redux";

const Available=(props)=>{
    return (
        <div className='available-container'>
            <LoggedInNavigation/>
            <div className='available-header'>
                <h1>Available Drones</h1>
            </div>
            <div className='available-card-container'>
            </div>
        </div>
    )

}

const mapStateToProps=(state)=>{
    return{
         drones:state.availableReducer.drones,
         loading:state.availableReducer.loading,
         error:state.availableReducer.error
    }
}

const mapDispatchToProps={getAvailableDrones}

export default connect(mapStateToProps,mapDispatchToProps)(Available)