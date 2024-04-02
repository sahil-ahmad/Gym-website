
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Cimg1 from '../assets/test1-WX10fSA3.jpg'
import Cimg2 from '../assets/test2-l2o90d0E.jpg'
import Cimg3 from '../assets/test3-o6ZUmE9C.jpg'
import Cimg4 from '../assets/test1-WX10fSA3.jpg'
import Cimg5 from '../assets/test_1.png'
import Cimg6 from '../assets/test_2.png'


const Clients = () => {
  return (
    <>
      <div className='client-container'>
        <div className='client-page1' data-aos="fade-right" data-aos-duration="1700"
                                data-aos-easing="ease-in-out">
          <h1>
            What Our Happy Clients <br /> Say About Us
          </h1>
          <div className='par'>
            <p>Five been a member of Fitness within for about 6 <br/>months now and I absolutely love it!  The trainers<br/> are so motivate  they really help to reach Fitnessgoals.</p>
          </div>
          <div className='p1-img'>
            <img src={Cimg1}/>
            <img src={Cimg2}/>
            <img src={Cimg3}/>
            <img src={Cimg4}/>
            <img src={Cimg6}/>
            <i class="fa-solid fa-star"></i>
            <p>4.9(450 Reviews)</p>

          </div>
          <div className='trust'>
            <img src={Cimg5}/>
          </div>



        </div>
        <div className='client-page2' data-aos="fade-left" data-aos-duration="1700"
                                data-aos-easing="ease-in-out">

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='client-slide'>
                <div className='client'>
                  <div className='c-img'>
                    <img src={Cimg1} />
                  </div>
                  <div className='c-name'>
                    <h2>Farhan Rio</h2>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='para'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div></SwiperSlide>
            <SwiperSlide> <div className='client-slide'>
              <div className='client'>
                <div className='c-img'>
                  <img src={Cimg2} /></div>
                <div className='c-name'>
                  <h2>Farhan Rio</h2>
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className='star'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='para'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className='client-slide'>
              <div className='client'>
                <div className='c-img'>
                  <img src={Cimg3} /></div>
                <div className='c-name'>
                  <h2>Farhan Rio</h2>
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className='star'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className='para'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div></SwiperSlide>
            <SwiperSlide>
              <div className='client-slide'>
                <div className='client'>
                  <div className='c-img'>
                    <img src={Cimg4} /></div>
                  <div className='c-name'>
                    <h2>Farhan Rio</h2>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className='para'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
              </div></SwiperSlide>

          </Swiper>
        </div>
      </div>

    </>
  )
}

export default Clients