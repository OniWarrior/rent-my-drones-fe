import React from "react";
import { Button } from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Rented.css'

const Rented =()=>{
    const initialValue = false
    const [isReturned,setIsReturned] = useState(initialValue)
    useEffect(()=>{
        props.getRentedDrones()
    },[isReturned])
    
    const handleReturnButton=(e,id)=>{
        e.preventDefault()        
        props.returnRentedDrone(id)
        setIsReturned(()=>({isReturned:!isReturned}))        
    }

    if(props.loading){
        return(<h1>...Loading</h1>)
    }
    else{

    return (
        <div className='renter-container'>
            <LoggedInNavigation/>
            <div className='renter-header'>
                <h1>Rented Drones</h1>
            </div>
            <div className='renter-card-container'>
                {
                    props.drones.map((char,index)=>{
                        return( 
                        <Card className='renter-card'title={char.drone_name}key={index} data={char} >
                            <div className='drone-image-container' >
                              <img className='drone-images'src={char.drone_image} alt='The drone your returning'/>                                        
                            </div> 
                            <div className='drone-info'>
                              <p>$ {char.drone_cost}</p>
                              <p>{char.drone_description}</p>                                  
                            </div>   
                            <div className='drone-button'>
                              <Button type='ghost' onClick={(e)=>handleReturnButton(e,char.drone_id)}>Rent Drone</Button>     
                            </div>
                                                  
                        </Card>)
                    })
                }
            </div>
        </div>
    )
    }

}

export default Rented