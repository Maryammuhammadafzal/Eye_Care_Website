import React from "react";
import ProcessImage from "../../Images/process-1.png"

const HowItWorks = () => {
  return (
    <div id="appointment" className="py-12 text-center bg-white">
      <h1 className="text-5xl font-bold text-gray-300 relative inline-block">
          How It Works
          <span className="absolute  top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#30D5C8] opacity-40">
            How It Works
          </span>
        </h1>
      <h3 className="text-2xl mt-2 font-bold mb-8">How it Helps You to Keep Healthy</h3>
      <div className="flex justify-center gap-10">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="relative inline-block">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">01</span>
              <img src={ProcessImage} alt="Step Image" className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-500 p-2" />
            </div>
            <h4 className="font-bold mt-2">Get Appointment</h4>
            <p className="text-sm text-gray-600">Book & pay online. We'll match you with a trusted house cleaner</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
