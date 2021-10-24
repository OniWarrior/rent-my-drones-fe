import React from "react";
import {  Typography } from "antd";
import '../styles/Home.css'

const Home =()=>{

    return(
        <div className='home-container'>
             <Typography.Title>
            Welcome to Rent My Drone App
          </Typography.Title>
            <div className='img-container'>
              <img id='title-drone'alt='title drone ' src='https://thumbs.dreamstime.com/b/silhouette-flying-drone-glowing-red-sunset-sky-modern-technological-background-silhouette-flying-drone-glowing-red-116709282.jpg'/>
            </div>
         
          <Typography.Paragraph>
              If you're an individual who's an avid drone enthusiast who's looking to rent a drone on the go or 
              a drone owner who's wanting to earn a little extra money by renting your drones,
              then Rent My Drone is the app for you.              
          </Typography.Paragraph>
          <Typography.Paragraph>
              With Rent My Drone, you can sign up and look for drones in your area that 
              are available to rent and rent directly from the owner. If you're an owner of drones,
              you can post a listing for your drones that are available to rent. Sign up/Login at the top of the screen.
          </Typography.Paragraph>
        

       
        </div>
    )

    

}

export default Home