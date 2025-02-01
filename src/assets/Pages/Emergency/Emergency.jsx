import React from "react";
import Ambulance from "../../Images/car-1.png"

const EmergencySection = () => {
  return (
    <div id="emergency" className="relative bg-teal-600 text-white py-12 px-6 md:px-20 flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-teal-600 opacity-80"></div>
      <div className="relative w-[100%] z-10 flex justify-between flex-col md:flex-row items-center">
        <img
          src={Ambulance}
          alt="Ambulance"
          className="w-[40%] "
        />
        <div className="w-[50%] flex items-center flex-col justify-center text-left">
          <h2 className="text-4xl font-bold">
            Need a Doctor for Check-up? Call for an
            <span className="text-orange-500"> Emergency Service!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            All of our services are backed by our 100% satisfaction guarantee. Our electricians
            can install anything.
          </p>
          <div className="mt-6 flex items-center">
            <div className="flex items-center bg-orange-500 p-3 rounded-full">
              <span className="text-white text-xl font-bold">📞</span>
            </div>
            <div className="ml-4">
              <p className="text-gray-300">For Emergency</p>
              <p className="text-xl font-bold">+1 (230)-456-155-23</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EmergencySection;
