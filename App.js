import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import FitnessGoal from './components/FitnessGoal';
import BestOffer from './components/BestOffer';
import FitnessCoach from './components/FitnessCoach';
import Plan from './components/Plan';
import Clients from './components/Clients';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTop from './components/ScrollToTop';
// ..
AOS.init();

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<FitnessGoal />} />
          <Route exact path='/menu' element={<BestOffer />} />
          <Route exact path='/service' element={<FitnessCoach />} />
          <Route exact path='/plan' element={<Plan />} />
          <Route exact path='/client' element={<Clients />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Navbar/>
      <Hero/>
      <FitnessGoal/>
      <BestOffer/>
      <FitnessCoach/>
      <Plan/>
      <Clients/>
      <Footer/> */}
    </>
  )
}

export default App;