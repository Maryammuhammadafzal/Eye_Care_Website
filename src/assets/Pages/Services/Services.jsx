import React from "react";
import { motion } from "framer-motion";
import Card from "../../Components/Card/Card";
import Image1 from "../../Images/our_team_image1.avif"
import Image2 from "../../Images/our_team_image2.avif"
import Image3 from "../../Images/our_team_image3.avif"
import Image4 from "../../Images/our_team_image4.avif"


import { FaUserDoctor } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-[100%] h-[500px] flex">
      <div className="w-[100%] h-full flex justify-center bg-gradient-to-bl from-[#d2f8f8]  via-[#bdf2eb] to-[#30D5C8] ">
        <div className="cardSection w-[95%] h-[500px] flex items-center justify-center">
          <div className="cards w-[100%] h-[350px] flex gap-x-3  justify-center items-center">
            <Card icon={FaUserDoctor} image={Image1}/>
            <Card icon={GiMicroscope} image={Image2}/>
            <Card icon={FaAmbulance} image={Image3}/>
            <Card icon={FaBed} image={Image4}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
