import React from "react";
import { Button } from "antd";
import LoggedInNavigation from "./LoggedInNavigation";
import '../styles/Rented.css'

const Rented =()=>{
    const initialValue = false
    const [isReturned,setIsReturned] = useState(initialValue)
    useEffect(()=>{
        props.getAvailableDrones()
    },[isReturned])
    
    const handleRentButton=(e,id)=>{
        e.preventDefault()        
        props.rentAvailableDrone(id)
        setIsRented(()=>({isRented:!isRented}))        
    }

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
                              <Button type='ghost' onClick={(e)=>handleRentButton(e,char.drone_id)}>Rent Drone</Button>     
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