import {useState} from "react";
import Lottie from "react-lottie";
// import { Link } from "react-router-dom";
import homeAnimation from "../../../assets/home_animation";
import sample from "../../../assets/videoBlog.mp4"
import Register from "../../register/Register";
import Login from "../../login/Login";
import bgImg2 from "../../../assets/bgg1.png";
import Modal from "../modal/Modal"

const Hero = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: homeAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  return (
        
    <div className=" home w-screen mt-8 h-screen">
      {/* <video src={sample} autoPlay loop muted className="mt-12 videoBlog" type="video/mp4" />  */}
      <img className="videoBlog" src={bgImg2} alt="/" />
      {/* <video src={sample} autoPlay loop muted className="mt-12 videoBlog" type="video/mp4" />  */}
       <div className="bg-overlay"></div>
      <div className=" mx-auto flex  md:flex-row flex-col items-center mt-4 md:mt-0 md:pt-0 ">
        <div className="md:w-1/2 md:px-9 text-center md:text-left ">
          <div className=" md:text-4xl  text-white font-bold sm: mt-20 text-xl">
            <span className=" md:inline-block mt-12  md:mb-3"> Kick-start your Career in Tech with In-demand Digital 
          Skills for Global relevance</span>
            <br className="hidden lg:inline-block " />
            <div className="mt-6">
              <button className="get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-blue-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg   ease-linear transition-all duration-150" onClick={() => 
                      setShowModal1(true)}>
                     Register Now
                  
              
              </button>
              <button className="get-st1arted text-white font-bold px-8 py-4 rounded 
                    outline-none bg-orange-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg 
                    ease-linear transition-all duration-150" onClick={() => 
                    setShowModal(true)}>
                     Login
              </button>
                
                
                </div>
          </div>
        </div>
        {/* <div className=" md:w-1/2 w-full">
          <div className="">
            <Lottie options={defaultOptions} />
          </div>{" "}
        </div> */}
      </div>
      <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
        <Login/>
      </Modal>
      <Modal isVisible={showModal1} onClose={()=> setShowModal1(false)}>
        <Register/>
      </Modal>
    </div>
    
    

  );
};

export default Hero;
