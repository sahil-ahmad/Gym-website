import React from 'react'
import Fimg from '../assets/services-EwnvMpWp.png'

const FitnessCoach = () => {
    return (
        <>
            <div className='fitness-coach'>
                <div className='f-content' data-aos="fade-right" data-aos-duration="1700"
                                data-aos-easing="ease-in-out">
                    <h1>Why Should People Choose Fitnesxia Services</h1>
                    <h4><i class="fa-solid fa-circle-check"></i> Personal Training</h4>
                    <p>Our Personal trainers can help you create a personalized<br/> fitness plan and track your progress.</p>
                    <h4><i class="fa-solid fa-circle-check"></i> Expert Trainer</h4>
                    <p>Our gym is proud to offer a team of highly skilled and certified<br/> trainer help achieve your health & fitness goals.</p>
                    <h4><i class="fa-solid fa-circle-check"></i> Flexible Time</h4>
                    <p>There are many fitness closses that are offered during <br/>off-peak hour, such as early morning or late evening.</p>
                    <button>Join Today</button>
                </div>
                <div className='f-coach' data-aos="fade-left" data-aos-duration="1700"
                                data-aos-easing="ease-in-out">
                    <img src={Fimg} />
                </div>
            </div>
        </>
    )
}

export default FitnessCoach