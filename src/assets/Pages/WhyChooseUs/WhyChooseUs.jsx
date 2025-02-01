import React from "react";
import ChooseUsImage from "../../Images/ChooseUsImage.jpg"

const WhyChooseUs = () => {
  return (
    <div id="features" className=" bg-[#ffffff]">
      <div className="container gap-2 mx-auto flex flex-col md:flex-row items-center py-10 ">
        {/* Left Section */}
        <div className="md:w-1/2 relative">
          <img
            src={ChooseUsImage}
            alt="Doctor with a child"
            className="rounded-lg shadow-lg w-full"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1d2536] w-16 h-16 rounded-full flex items-center justify-center shadow-md">
            ▶
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 ">
        <h2 className="text-5xl font-bold relative text-gray-300 uppercase">
          Why Choose Us
        </h2>
          <h2 className="text-3xl font-bold mb-4">Great Reasons For People Choose Optcare</h2>
          <p className="text-sm  mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore aliqua.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores cum natus, magnam odio hic nobis pariatur. Harum incidunt nemo modi laboriosam, deleniti laborum. A veniam quaerat accusantium eos rem!
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex">
                <div className="w-[30px] h-[30px] bg-[#30D5C8] rounded-full mr-4"></div>
                <div className="flex flex-col">
                <p className="text-sm font-semibold">Quality Staff</p>
                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
   
   <div className="bg-[#30D5C8] w-[60%] mx-auto rounded-bl-3xl -mt-8 z-auto h-[100px] flex items-center rounded-tr-3xl">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div>
            <h3 className="text-3xl font-bold">90</h3>
            <p className="text-sm">Expert Doctors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">2.6</h3>
            <p className="text-sm">Different Services</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">35</h3>
            <p className="text-sm">Happy Patients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10</h3>
            <p className="text-sm">Awards Win</p>
          </div>
        </div>
   </div>
    </div>
  );
};

export default WhyChooseUs;

