
import '../styles/home.css'
import UnsignedNavigation from './unsigned-navigation'

const Home = () => {

    return (
        <div>
            <UnsignedNavigation />
            <div className='home-container'>
                <div className='drone-img'>
                </div>
                <main className='main-doc'>
                    <h1>Rent My Drones</h1>

                    <p>Here at Rent My Drone, we allow the drone enthusiast to directly rent from a local drone owner.</p>
                    <p>We also allow an owner to rent out their drone to earn money</p>
                    <p>So if your a drone owner lookign to earn some extra money by renting out your drone or a drone enthusiast who needs a drone quickly for use.
                        then signup/login at the top of the page.
                    </p>
                </main>
            </div>
        </div>
    )



}

export default Home