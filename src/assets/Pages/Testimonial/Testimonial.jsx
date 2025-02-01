import React from "react";
import TestimonialImage from "../../Images/testimonial_image.avif";
import ClientImage1 from "../../Images/client-image1.avif";
import ClientImage2 from "../../Images/client-image2.avif";
import ClientImage3 from "../../Images/client-image3.avif";
import ClientImage4 from "../../Images/client-image4.avif";

const Testimonial = () => {
  return (
    <div className="relative bg-teal-600 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-0 ">
        {/* Left Section */}
        <div className="relative  h-[450px]">
          <div className="bg-white w-[500px] h-[400px] rounded-bl-4xl rounded-tr-4xl p-3">
            <h1 className="text-5xl font-bold text-gray-300 relative inline-block">
              Testimonial
              <span className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#30D5C8] opacity-30">
                Testimonial
              </span>
            </h1>
            <h2 className="text-2xl font-bold p-2 ">
              What Our Client Say About Optcare
            </h2>
            <p className="text-md mt-4 text-gray-400 p-3">
              “Adipisicing elit sed do eiusmodim tempor incid labore etax dolore
              magna aliqua enim minim quis veniam nostrud exer cition ullamco
              laboris nisar aliquip commodo consequat aute irure dolor in
              reprehenderit in voluptate”.
            </p>

            <div className="flex items-center mt-6 bg-neutral-200 p-3 rounded-4xl">
              <img
                src={ClientImage1}
                alt="Rachel McAdams"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Rachel McAdams</h4>
                <p className="text-sm text-gray-400">Electrician</p>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src={TestimonialImage}
            alt="Client and doctor"
            className="rounded-lg opacity-60 h-[650px] w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
