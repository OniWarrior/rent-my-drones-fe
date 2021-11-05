import { Button } from 'antd'
import React from 'react'
import '../styles/RenterDashboard.css'
import { useHistory } from 'react-router'


const RenterDashboard=()=>{
    const {push} = useHistory()

    const handleAvailable=(e)=>{
        e.preventDefault()
        push('/available')
    }

    const handleRented=(e)=>{
        e.preventDefault()
        push('/rented')
    }


    return(
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <h1>Dashboard</h1>                
            </div>
            <div className='dashboard-card-container'>
              <Button className='dashboard-card' ></Button>
              <Button className='dashboard-card'></Button>
            </div>
        </div>
    )

}

export default RenterDashboard