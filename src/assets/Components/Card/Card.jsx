import React from 'react'
import { motion } from 'framer-motion'
import { FaUserDoctor } from "react-icons/fa6";
const Card = ({icon , image}) => {

  return (
    <>
      <motion.div className="card w-[23%] p-3 h-[340px] bg-white rounded-lg flex flex-col hover:bg-orange-400 transform hover:text-white" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
              <div className="ImageDiv w-full h-[100px] flex items-center">
                <div className="cardImage bg-teal-100 rounded-full flex items-center justify-center w-[80px] h-[80px] ">
                  <img src={image} className='w-[80px] h-[80px] rounded-full' alt="icon" />
                </div>
              </div>
              <div className="cardTitle h-[100px] w-full items-center flex p-2">
                <h3 className="capitalize font-bold text-2xl">Qualified Doctor</h3>
              </div>
              <div className="discription w-full px-2 h-[100px] items-center flex ">
                <p className="text-sm capitalize">Our doctors are highly qualified and experienced in their respective fields.cupiditate nisi aliquid repellat sint illum voluptatem
                </p>
                 
              </div>
            </motion.div>
    </>
  )
}

export default Card
