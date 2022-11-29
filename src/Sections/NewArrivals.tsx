import React from 'react';
import WomanHeadHand from '../Assets/images/WomanHeadHand.svg';
import Pocketman from '../Assets/images/pocketMan.svg';
import ShopButton from '../Components/ShopButton';


const NewArrivals :React.FC = () => {
  return (
    
    <section className="__newarrivals">

        <div className="winterclearance">
            <img src= {WomanHeadHand} alt="woman holding head"/>
            <h2 className = "saledetails">Winter Clearance Up To 70% Off!</h2>
            <p className = "breadtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ea nobis numquam, quod quibusdam sdijfkhsd lkjdgfs qwekj dsf</p>
            <ShopButton/>
        </div>

        < div className="shopnowarrival">
            <img src={Pocketman} alt="man with pockets"/>
            <h1 className= "arrival-headline">New Arrivals</h1>
            <ShopButton/>  
        </div>

    </section>
  )
}

export default NewArrivals