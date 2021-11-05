import { Button } from 'antd'
import React from 'react'
import '../styles/RenterDashboard.css'


const RenterDashboard=()=>{

    return(
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <h1>Dashboard</h1>                
            </div>
            <div className='dashboard-card-container'>
              <Button className='dashboard-card'></Button>
              <Button className='dashboard-card'></Button>
            </div>
           
            
            

        </div>
    )

}

export default RenterDashboard