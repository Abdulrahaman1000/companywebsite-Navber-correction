import React from 'react'
import bgImg1 from "../../../assets/Group 2061/g6.jpg"
import Money from "../../../assets/Group 2061/money.jpg"
import Accredited from "../../../assets/Group 2061/accredited.png"
import Oppo from "../../../assets/Group 2061/oppo.jpg"
import Hand from "../../../assets/Group 2061/haad.png"

const Gallery = () => {
  return (
    <> 
     <div className='mb-12'>   
           <h1 className='flex justify-center mt-16 text-4xl mt-4 font-bold'>YOUR CAREER PATH BEGINS HERE</h1>
    <div className='flex justify-center'>
        <div className='mt-16  grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4'>

        <div className="w-full  rounded bg-white overflow-hidden shadow-lg sm:w-full max-w-2xl mr-4 ml-2">
       
          <div className='flex justify-center mt-4 rounded-full'>
        <a href="#"> <img className="h-[100px] w-[150px] md:h-[150px] rounded-full" src={Money} alt="/" /></a>
        </div>
  <div className="px-6 mb-12 py-4">
    <div className="font-bold text-xl mb-2 text-center">AFFORDABILITY</div>
    <p className="text-gray-700 text-center">
      The average cost of learning a  tech skill is ₦300 000 -  ₦500 000. You get it a way less here.
    </p>
  </div>
       
        </div>
        
        
        <div className="w-full  rounded bg-white overflow-hidden shadow-lg sm:w-full max-w-2xl mr-4 ml-2">
          <div className='flex justify-center mt-8 rounded-full'>
        <a href="#"> <img className="h-[100px] w-[100px] md:h-[100px] rounded-full" src={Accredited} alt="/" /></a>
        </div>
  <div className="px-6 mb-8 py-4">
    <div className="font-bold text-xl mb-2 mt-8 text-center">ACCREDITATTION</div>
    <p className="text-gray-700 text-center">
      Our training programs certificates are widely accredited and we have 
      students across the globe.
    </p>
  </div>
        </div>
        

   
        <div className="w-full rounded   bg-white overflow-hidden shadow-lg sm:w-full max-w-2xl mr-4 ml-2">
          <div className='flex justify-center  rounded-full'>
        <a href="#"> <img className="h-[100px] w-[110px] md:h-[110px] mt-8 rounded-full" src={Oppo} alt="/" /></a>
        </div>
  <div className="px-6 mb-8 py-4">
    <div className="font-bold text-xl mb-2 mt-6 text-center">OPPORTUNITIES</div>
    <p className="text-gray-700 text-center">
      You will be exposed to a wide access of both local & international opportunites
    </p>
  </div>
        </div>

        <div className="w-full rounded   bg-white overflow-hidden shadow-lg sm:w-full max-w-2xl mr-8 ml-2">
          <div className='flex justify-center  rounded-full'>
        <a href="#"> <img className="h-[100px] w-[110px] md:h-[110px] mt-8 rounded-full" src={Hand} alt="/" /></a>
        </div>
  <div className="px-6 mb-8 py-4">
    <div className="font-bold text-xl mb-2 mt-6 text-center">TRACK RECORD</div>
    <p className="text-gray-700 text-center">
    We'av trianed over 500 people with high record of over 70% of them suceeding in their triained skills
    </p>
  </div>
        </div>
        
        </div>
    </div>
    </div> 
    </>

  )
}

export default Gallery