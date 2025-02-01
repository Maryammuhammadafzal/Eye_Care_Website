import React from 'react'
import './hero.css'
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Video from "../../Images/video.mp4"
import { Link } from 'react-router';
import Footer from '../../Pages/Footer/Footer';

const Hero = () => {
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  
  return (
  

    <>
     <div className="relative w-[100%] h-screen bg-cover bg-center flex items-center justify-center">
     <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-teal-600 opacity-60"></div>
      <div className="relative text-center text-white z-10 max-w-2xl p-6 flex items-center flex-col gap-y-2">
        <motion.h2 
          className="text-xl font-semibold text-teal-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Eye Care & Holistic Health Center
        </motion.h2>
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Eye Care & Holistic <br /> Health Center
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          We solve all your eye care needs by providing personalized and holistic eye care for you and your family!
        </motion.p>
        <motion.button 
         onClick={scrollToFooter} 
         className='transition w-[150px] py-3 rounded-4xl flex justify-center items-center border-[#30D5C8] border  hover:bg-transparent hover:text-black hover:border-black bg-[#30D5C8] text-white'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          Contact Now
        </motion.button>
      </div>
    </div>

    </>
  )
}

export default Hero
