import React, { useEffect } from "react";
import { Button,Card } from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Available.css'
import { connect } from "react-redux";
import { getAvailableDrones } from "../state/actions/AvailableActions";

const Available=(props)=>{

    useEffect(()=>{
        props.getAvailableDrones()
    },[])
    return (
        <div className='available-container'>
            <LoggedInNavigation/>
            <div className='available-header'>
                <h1>Available Drones</h1>
            </div>
            <div className='available-card-container'>
                {
                    props.drones.map((char,index)=>{
                        return( 
                        <Card title={char.drone_name}key={index} data={char} style={{width:400}}>
                            <img src={char.drone_image} alt='The drone your buying'/>      

                        </Card>)
                    })
                }
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