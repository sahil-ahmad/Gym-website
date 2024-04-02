import React from 'react'
import Fimg from '../assets/logo_main-48JSqkPZ.png'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='f-container'>
                <div className='content'>
                    <div className='company'>
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Why us</p>
                        <p>Security</p>
                        <p>Partnership</p>
                    </div>
                    <div className='company'>
                        <h2>Categories</h2>
                        <p>Basic Yoga</p>
                        <p>Strength Training</p>
                        <p>Body Building</p>
                        <p>Weight Lost</p>
                    </div>
                    <div className='company'>
                        <h2>Help</h2>
                        <p>Account</p>
                        <p>support Center</p>
                        <p>Privacy Policy</p>
                        <p>Term & Conditions</p>
                    </div>
                    <div className='company'>
                        <h2>Contact Us</h2>
                        <p><i class="fa-solid fa-phone"></i> +91 9929872757</p>
                        <p><i class="fa-solid fa-envelope"></i> ABC@gmail.com</p>
                        <p><i class="fa-solid fa-location-dot"></i> 100,sanjay nagar'c'<br/>jhotwara,japur</p>
                       
                    </div>
                    <div className='sub'>
                        <h2>Subscribe Our Newsletter</h2>
                        <input type='text' placeholder='Enter your email' />
                        <p>Never miss on update & news to your email.</p>
                    </div>
                </div>
                <div className='content2'>
                    <div className='c-logo'>
                        <img src={Fimg}/>
                    </div>
                    <div className='copy'>
                        <p>
                        © 2023 Design, All Copyrights reserved.
                        </p>
                    </div>
                    <div className='share'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer