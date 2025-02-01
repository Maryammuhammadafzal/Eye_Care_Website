import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import Logo from "../../Images/logo.jpeg";

const Footer = () => {
        const scrollToHome = () => {
                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
              };
        const scrollToTeam = () => {
                document.getElementById("ourteam").scrollIntoView({ behavior: "smooth" });
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
    <footer id="footer"  className="bg-[#0c0f16] text-white py-12 px-8 relative">
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative z-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-gray-400 text-sm mt-3">
            Lorem ipsum dolor amet consecto adi piscing elit sed eiusmod tempor incididunt labore dolore magna aliqua enim ad minim.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-red-500 transition">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><a  onClick={scrollToHome} className="hover:text-blue-400">Home</a></li>
            <li><a  onClick={scrollToAbout} className="hover:text-blue-400">Who we are</a></li>
            <li><a  onClick={scrollToServices} className="hover:text-blue-400">Our services</a></li>
            <li><a  onClick={scrollToFeatures} className="hover:text-blue-400">Why Choose us</a></li>
            <li><a  onClick={scrollToTeam} className="hover:text-blue-400">Our Team</a></li>
            <li><a  onClick={scrollToAppointment} className="hover:text-blue-400">How It works</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-blue-400">Contact Lens</a></li>
            <li><a href="#" className="hover:text-blue-400">Retinopathy</a></li>
            <li><a href="#" className="hover:text-blue-400">Qualified Doctors</a></li>
            <li><a href="#" className="hover:text-blue-400">Modern Equipment</a></li>
            <li><a href="#" className="hover:text-blue-400">Emergency Help</a></li>
            <li><a href="#" className="hover:text-blue-400">Individual Approach</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contacts</h3>
          <ul className="mt-3 space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><IoLocationSharp className="text-orange-500" /> Mark Jones Eye Care 21 Fisherton Street Salisbury</li>
            <li className="flex items-center gap-2"><IoCall className="text-orange-500" /> 01722 322891</li>
            <li className="flex items-center gap-2"><IoMail className="text-orange-500" /> eyecare@markjoneseyecare.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-gray-300 mt-10 py-4 rounded-xl flex flex-wrap justify-between items-center px-8">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-[90px]" alt="logo" />
        </div>
        <ul className="flex space-x-6 text-gray-400 text-sm">
          <li><a onClick={scrollToTeam} className="hover:text-blue-400">Our Team</a></li>
          <li><a onClick={scrollToServices} className="hover:text-blue-400">Our Services</a></li>
          <li><a onClick={scrollToAbout} className="hover:text-blue-400">About</a></li>
          <li><a onClick={scrollToAppointment}  className="hover:text-blue-400">How It work</a></li>
          <li><a onClick={scrollToFeatures} className="hover:text-blue-400">Features</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        Optcare © 2025 All Rights Reserved
      </div>

      {/* Scroll to Top Button */}
      <a href="#" className="fixed bottom-6 right-6 bg-orange-500 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition">
        ↑
      </a>
    </footer>
  );
};

export default Footer;
