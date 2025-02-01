import React from 'react'
import Footer from '../../Pages/Footer/Footer';
const Button = ({title}) => {
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='w-fit flex items-center h-20' >
      <button 
       onClick={scrollToFooter}
      className='w-[120px] py-3 rounded-4xl flex justify-center items-center border border-[#30D5C8] hover:bg-transparent hover:text-black hover:border-black bg-[#30D5C8] text-white'>{title}</button>
    </div>
  )
}

export default Button
