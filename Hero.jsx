import React from 'react'
import Pbtn from '../assets/photo.png'
import Img1 from '../assets/main-image1-JGVa53bJ.png'
import Img2 from '../assets/body_prev_ui.png'






import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <>
            <div id='home'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>    <div className='hero'>
                        <div className='hero-container'>
                            <div className='hero-row'>
                                <div className='col1' data-aos="fade-right" data-aos-duration="1500"
                                    data-aos-easing="ease-in-out">
                                    <h1>Get <span>Healthy</span> Body <br /> With The<span> Perfect</span> <br /> Exercises</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. </p>
                                    <div className='hero-btn'>
                                        <button className='btn1'> Get Started</button>
                                        <button className='play-btn'> <img src={Pbtn} />watch video</button>
                                    </div>
                                </div>
                                <div className='col2'>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='hero1'>
                            <div className='hero-container'>
                                <div className='hero-row'>
                                    <div className='col1'>
                                        <h1>Get <span>Healthy</span> Body <br /> With The<span> Perfect</span> <br /> Exercises</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. </p>
                                        <div className='hero-btn'>
                                            <button className='btn1'> Get Started</button>
                                            <button className='play-btn'> <img src={Pbtn} />watch video</button>
                                        </div>
                                    </div>
                                    <div className='col2' >
                                        <img src={Img1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>     <div className='hero2'>
                        <div className='hero-container'>
                            <div className='hero-row'>
                                <div className='col1'>
                                    <h1>Get <span>Healthy</span> Body <br /> With The<span> Perfect</span> <br /> Exercises</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. </p>
                                    <div className='hero-btn'>
                                        <button className='btn1'> Get Started</button>
                                        <button className='play-btn'> <img src={Pbtn} />watch video</button>
                                    </div>
                                </div>
                                <div className='col2'>
                                    <img src={Img2} />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='hero3'>
                            <div className='hero-container'>
                                <div className='hero-row'>
                                    <div className='col1'>
                                        <h1>Get <span>Healthy</span> Body <br /> With The<span> Perfect</span> <br /> Exercises</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. </p>
                                        <div className='hero-btn'>
                                            <button className='btn1'> Get Started</button>
                                            <button className='play-btn'> <img src={Pbtn} />watch video</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Hero;