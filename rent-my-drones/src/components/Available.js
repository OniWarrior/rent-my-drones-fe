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
    if(props.loading){
        return(<h1>...Loading</h1>)
    }
    else{

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
                        <Card className='available-card'title={char.drone_name}key={index} data={char} >
                            <div className='drone-image-container' >
                              <img className='drone-images'src={char.drone_image} alt='The drone your buying'/> 
                              <p>{char.drone_cost}</p>
                              <p>{char.drone_description}</p>
                              <Button>Rent Drone</Button>
                            </div>                              
                        </Card>)
                    })
                }
            </div>
        </div>
    )
    }
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