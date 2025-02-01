import React from "react";
import Image1 from "../../Images/our_team_image1.avif"
import Image2 from "../../Images/our_team_image2.avif"
import Image3 from "../../Images/our_team_image3.avif"
import Image4 from "../../Images/our_team_image4.avif"

const OurTeam = () => {
        const teamMembers = [
                { name: "Susan Hopkins", specialty: "Cataract surgery", image: Image1 },
                { name: "Keanu Reeves", specialty: "Clarivu eye", image: Image2 },
                { name: "Dr. Robert De Niro", specialty: "Glaucoma", image: Image3 },
                { name: "Dr. Mel Gibson", specialty: "Laboratory", image: Image4 },
              ];
  return (
    <div id="ourteam" className="bg-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-300 relative inline-block">
          Our Team
          <span className="absolute  top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#30D5C8] opacity-40">
            Our Team
          </span>
        </h1>
        <p className="text-xl font-semibold text-gray-700 mt-2">
          The Most Qualified Skillful & Professional staff
        </p>
      </div>

      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((doctor, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl shadow-lg p-6 text-center relative">
           
            <img
              src={doctor.image}
              alt={doctor.name}
              className="mx-auto w-40 h-40 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{doctor.specialty}</p>
            <button className="absolute top-4 right-4 bg-white shadow-md p-2 rounded-full hover:bg-[#30D5C8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600">
          View All Team
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
