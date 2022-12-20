import React from 'react';
import customerService from '../Assets/images/customerService.svg';
import creditCard from '../Assets/images/creditCard.svg';
import deliveryTruck from '../Assets/images/deliveryTruck.svg'


const infoBoxes :React.FC = () => {
  return (
    <div className = 'boxContainer'>

        <div className = 'infoBox '>
            <span className ='boxLogo'>
                <img className = "infoPic" src= {customerService} alt="Customer Service" />
            </span>
            <h2 className ='boxHead'>Customer Support</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <span className ='boxLogo'>
                <img className = "infoPic" src = {creditCard} alt="Customer Service" />
            </span>
            <h2 className ='boxHead'>Secured Payment</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <span className ='boxLogo'>
                <img className = "infoPic" src= {deliveryTruck} alt="Customer Service" />
            </span>
            <h2 className ='boxHead'>Free Home Delivery</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

        <div className = 'infoBox'>
            <span className ='boxLogo'>
                <img src= {deliveryTruck} alt="Customer Service" />
            </span>
            <h2 className ='boxHead'>30 Day Reuters</h2>
            <p>village did not remove enjoyed explain talking</p>
        </div>

    </div>
  )
}

export default infoBoxes