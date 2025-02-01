import React from "react";
import { BrowserRouter } from "react-router";
import { Link } from "react-router";
import Button from "./Button/Button";
import Logo from "../Images/logo.jpeg";
import Footer from "../Pages/Footer/Footer";

const Navbar = () => {
  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAppointment = () => {
    document.getElementById("appointment").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEmergency = () => {
    document.getElementById("emergency").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-[100%] h-[150px] flex flex-col bg-gray-300">
      <div className="w-[100%] h-[40px] flex justify-center items-center bg-teal-600">
        <div className="w-[70%] h-[30px] flex justify-between items-center gap-x-2">
          <div className="email w-fit flex items-center">
            <img src="" alt="" />
            <address  className="flex items-center text-[14px] font-semibold">
              Email:&nbsp;
              <a href="mailto:info@mysite.com" className="text-[12px] font-normal  ">eyecare@markjoneseyecare.com</a>
            </address> 
          </div>
          <div className="address w-fit flex items-center ">
            <img src="" alt="" />
            <address className="flex items-center text-[14px] font-semibold">
              Address: &nbsp;
              <p className="hover:text-[#30D5C8] text-[12px] font-normal ">Mark Jones Eye Care 21 Fisherton Street Salisbury</p>
            </address>
          </div>
          <div className="address w-fit flex items-center">
            <img src="" alt="" />
            <address  className="flex items-center text-[14px] font-semibold">
              Phone:&nbsp;
              <p className="text-[12px] font-normal font-helvetica ">01722 322891</p>
            </address>
        </div>
        </div>
       
       
      </div>
      <div className="w-[100%] h-[80px] flex justify-center gap-x-5 items-center  static">
        <div className="logo w-[15%] h-fit">
                <img src={Logo} className="w-[110px] h-[80px]" alt="logo" />
        </div>
        <div className="tabs w-[50%] h-fit">
               <ul className="w-full h-[50px] flex justify-between items-center">
                <li  onClick={scrollToHome}  className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Home</li>
                <li  onClick={scrollToAbout} className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">About</li>
                <li  onClick={scrollToServices} className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Services</li>
                <li  onClick={scrollToFeatures} className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Features</li>
                <li  onClick={scrollToAppointment} className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Appointment</li>
                <li  onClick={scrollToEmergency} className="tabItem cursor-pointer w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Emergency</li>
               </ul>
        </div>
        <div className="btn w-[15%] h-fit flex items-center justify-center">
                <Button title="Contact us"/>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
