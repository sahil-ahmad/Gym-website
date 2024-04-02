import React, {useRef} from 'react'
import logo from "../assets/logo_main-48JSqkPZ.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarRef = useRef();
    const navbarHandaler = ()=>{
        navbarRef.current.classList.toggle('active');
    };

    
    return (
        <>
            <header className="header">
                <Link  className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <nav className="navbar" ref={navbarRef} data-aos="fade-down" data-aos-duration="1500"
                                data-aos-easing="ease-in-out">
                    {/* <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Service</a>
                    <a href="#review">Plan</a>
                    <a href="#contact">Review</a> */}

                    <Link smooth to="/">Home</Link>
                    <Link smooth to="/about">About</Link>
                    <Link smooth to="/menu">Menu</Link>
                    <Link smooth to="/service">Service</Link>
                    <Link smooth to="/plan">Plan</Link>
                    <Link smooth to="/client">Review</Link>
                   
                </nav>
               
                <div className='icon'>
                    <i class="fa-solid fa-bars" id='menu-btn' onClick={navbarHandaler}></i>
                </div>
            </header>
            
        </>
    )
}

export default Navbar;