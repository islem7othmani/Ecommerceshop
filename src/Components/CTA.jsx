import React from "react";
import banner from '../Images/banner2.jpg'
const CTA = () => {
  return (
    <>
     <div className="h-56 relative mt-20">
     <img src={banner} alt="" className="relative w-full h-full"/>
        <div className="relative bottom-48 left-28">
        <h1 className="font-bold text-5xl text-red-900 pb-4">UP TO 70% DISCOUNT !!!</h1>
        <p className="font-mono text-xl text-white">ALL T-SHIRTS AND ACCESSORIES</p>
        <button className="bg-white text-black py-2 px-4 mt-4 rounded-lg">Explore more</button>
        </div>
        
        
     </div>
    </>
  );
};

export default CTA;
