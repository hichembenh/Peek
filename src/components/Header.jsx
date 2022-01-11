import React from 'react'
import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                {/*<h1>Bienvenu dans <span>PeekPower Gym</span></h1>*/}
                <h1>Le sport va chercher la peur pour la dominer, la fatigue pour en triompher, la difficulté pour la vaincre.</h1>
            </div>
            <div className="arrow"></div>
        </div>
    )
}

export default Header