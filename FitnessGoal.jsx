import React from 'react'
import Pimg1 from '../assets/partner1-zF7vbTNY.png'
import Pimg2 from '../assets/partner2-0v4I3E4H.png'
import Pimg3 from '../assets/partner3-1SbtTxdT.png'
import Pimg4 from '../assets/fitness1-sdaas.jpg'
import Pimg5 from '../assets/gym-icon.png'

const FitnessGoal = () => {
    return (
        <>
            <div id='#about'>
                <div className='fitness-goal' >
                    <div className='container-f'>
                        <div className='row-f'>
                            <div className='col-f'>
                                <div className='f-col1'>
                                    <h1>970K + More</h1>
                                    <p>Trusted Comparies Partner</p>
                                </div>
                            </div>
                            <div className='col-g'>
                                <div className='f-col2'>
                                    <img src={Pimg1} />
                                    <img src={Pimg2} />
                                    <img src={Pimg3} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* **************************** */}

                <div className='fitness-goal1'>
                    <div className='container-f'>
                        <div className='row-f'>
                            <div className='col-f' data-aos="fade-right" data-aos-duration="1700"
                                data-aos-easing="ease-in-out">
                                <div className='f-col1'>
                                    <img src={Pimg4} />
                                    <div className='pro-trainer'>
                                        <img src={Pimg5} />
                                        <h4>Professional<br />Trainer</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-g'>
                                <div className='f-col2' data-aos="fade-left" data-aos-duration="1700"
                                    data-aos-easing="ease-in-out">
                                    <h1>
                                        Get Ready To Reach <br /> Your Fitness Goal
                                    </h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem  Ipsum has been the<br /> industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and<br /> scrambled it to make a type specimen book. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua.</p>
                                    <button>Free Trial Today</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FitnessGoal