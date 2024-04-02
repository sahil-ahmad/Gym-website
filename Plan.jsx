import React from 'react'

const Plan = () => {
    return (
        <>
            <div className='plan'>
                <div className='p-container1'>
                    <div className='p-content'>
                        <h1>Choose The Best Plan</h1>
                        <p>Choose a plan that's right for your growing team simple pricing & No hidden charges</p>
                    </div>
                </div>
                <div className='p-container2' data-aos="fade-down" data-aos-duration="2000"
                                data-aos-easing="ease-in-out">
                    <div className='p-box'>
                        <h4>Discover</h4>
                        <h1>$99<span> /Per Month</span></h1>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 5 classes per month</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 4 group class monthly</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> Online class access</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> E-book fitness guide</p>
                        <button> Choose Plan</button>
                    </div>
                    <div className='pc-box'>
                        <h3 className='most'>Most Popular</h3>
                        <h4>Discover</h4>
                        <h1>$299<span> /Per Month</span></h1>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 10 classes per month</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 10 group class monthly</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 5 classes per month</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 5 classes per month</p><p><i class="fa-sharp fa-solid fa-check"></i> 5 classes per month</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> Online class access</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> E-book fitness guide</p>
                        <button> Choose Plan</button>
                    </div>
                    <div className='p-box'>
                        <h4>Discover</h4>
                        <h1>$199<span> /Per Month</span></h1>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 5 classes per month</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> 4 group class monthly</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> Online class access</p>
                        <p><i class="fa-sharp fa-solid fa-check"></i> E-book fitness guide</p>
                        <button> Choose Plan</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Plan