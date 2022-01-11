import React from "react";
import facebook from '../images/facebook.png'
import mail from '../images/mail.jpg'
import adresse from '../images/adresse.png'
import telephone from '../images/telephone.png'

const Contact = () => {
    return (
        <div id='contact'>
            <h3>Contact</h3>
            <span style={{marginLeft: "10px"}}>
                <img src={facebook} alt="facebook" width='20' height='20'/>
                <a href="https://www.facebook.com/PeakPower-Gym-111710327820880">PeakPower Gym</a>
            </span>
            <span style={{marginLeft: "10px"}}>
                <img src={mail} alt="mail" width='20' height='20'/>
                    contact@peekpower.tn
            </span>
            <span style={{marginLeft: "10px"}}>
                <img src={adresse} alt="adresse" width='20' height='20'/>
                nour jaafer ariana 2083
            </span>
            <span style={{marginLeft: "10px"}}>
                <img src={telephone} alt="telephone" width='20' height='20'/>
                +216 20 967 033
            </span>
        </div>
    )
}

export default Contact