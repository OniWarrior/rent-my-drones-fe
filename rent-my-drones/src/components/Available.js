import React, { useEffect,useState } from "react";
import { Button,Card} from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Available.css'
import { connect } from "react-redux";
import { getAvailableDrones,rentAvailableDrone } from "../state/actions/AvailableActions";



const Available=(props)=>{
    const initialValue = false
    const [isRented,setIsRented] = useState(initialValue)
    useEffect(()=>{
        props.getAvailableDrones()
    },[isRented])
    
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
                            </div> 
                            <div className='drone-info'>
                              <p>$ {char.drone_cost}</p>
                              <p>{char.drone_description}</p>                                  
                            </div>   
                            <div className='drone-button'>
                              <Button type='ghost'>Rent Drone</Button>     
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

const mapDispatchToProps={getAvailableDrones,rentAvailableDrone}

export default connect(mapStateToProps,mapDispatchToProps)(Available)