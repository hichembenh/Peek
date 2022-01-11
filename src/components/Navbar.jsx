import React, {useEffect} from 'react'
import {Link} from 'react-scroll'
import logo from '../images/logo.png'
import Audio from '../audio/audio.mp3'
import useSound from 'use-sound';

const Navbar = () => {
    const [play] = useSound(Audio,{volume:0.1});
    useEffect(()=>{
        play()
    })

    return (
        <div>
            <nav>
                <Link to='main' className='logo'>
                    <img src={logo} alt='logo'/>
                </Link>
                <input type="checkbox" className='menu-btn' id='menu-btn'/>
                <label htmlFor='menu-btn' className='menu-icon'>
                    <span className='nav-icon'/>
                </label>
                <ul className="menu">
                    <li><Link to='main' className='active' smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='activite' smooth={true} duration={1000}>Activités</Link></li>
                    <li><Link to='tarif' smooth={true} duration={1000}>Tarifs</Link></li>
                    <li><Link to='programme' smooth={true} duration={1000}>Programme</Link></li>
                    <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar