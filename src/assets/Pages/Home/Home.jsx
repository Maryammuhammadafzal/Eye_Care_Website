import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero/Hero'
import Services from '../Services/Services'
import About from '../About/About'
import Our_Services from '../Our_Services/Our_Services'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import OurTeam from '../OurTeam/OurTeam'
import Testimonial from '../Testimonial/Testimonial'
import HowItWorks from '../HowItWorks/HowItWork'
import EmergencySection from '../Emergency/Emergency'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div id='home' className='w-[100%] h-auto flex flex-col'>
        <Navbar/>
       <Hero/>
       <Services/>
       <About/>
       <Our_Services/>
       <WhyChooseUs/>
       <OurTeam/>
       <Testimonial/>
       <HowItWorks/>
       <EmergencySection/>
       <Footer/>
    </div>
  )
}

export default Home
