import React, {useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = (props) => {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="s-box" data-aos="zoom-out-up">
            <div className='s-b-img'>
                <img src={props.image} alt={props.titre}/>
            </div>
            <div className='s-b-text'>
                <p>{props.titre}</p>
                <p>{props.description}</p>
                <a>{props.prix}dt/mois</a>
            </div>
        </div>
    )
}

export default Card