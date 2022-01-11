import React, {useEffect} from "react";
import sports from "../data/sports";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Activite = () => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <>
            <div className='f-heading'>
                <h1>Activité</h1>
            </div>
            {sports.map(sport=><div data-aos='flip-left' id='activite' style={{backgroundImage:sport.image}}>
                <div className='features-model' >
                    <img src={sport.image} alt="feature-image"/>
                </div>
                <div className='features-text'>
                    <h2>{sport.titre}</h2>
                    <h3>{sport.description}</h3>
                </div>
            </div>)}
        </>
    )
}

export default Activite