
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bgImg1 from "../../../assets/Artboard 1Get Certifie.png";
import bgImg2 from "../../../assets/Artboard 2Get Certifie.png";
import bgImg3 from "../../../assets/Artboard 3Get Certifie.png";
import bgImg4 from "../../../assets/Artboard 4Get Certifie.png";
import bgImg5 from "../../../assets/Artboard 5Get Certifie.png";
import bgImg6 from "../../../assets/Artboard 6Get Certifie.png";
import bgImg7 from "../../../assets/Artboard 7Get Certifie.png";
import bgImg8 from "../../../assets/Artboard 8Get Certifie.png";
import bgImg9 from "../../../assets/Artboard 9Get Certifie.png";
// import bgImg10 from "../../assets/Artboard 10Get Certifie.jpg";
import bgImg11 from "../../../assets/Artboard 11Get Certifie.jpg";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            
          }
        }
      ]
    };
    return (
      <div className="py-10  ml-4  w-full">
        <h2 className="text-center mt-12 text-center text-3xl mb-4 font-bold">All Available courses Previewing</h2>
       
       <div className="flex justify-center gap-4 ">
       <Slider className=" w-full max-w-6xl  sm:w-full max-w-2xl mr-4  " ref={slider => (this.slider = slider)} {...settings}>
        {/* w-auto max-w-sm sm:w-full max-w-2xl mr-4 ml-4 */}
          <div>
            <a href="#"> <img className=" border rounded" src={bgImg1} alt="/" /></a>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg2} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg3} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg4} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg5} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg6} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg7} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg8} alt="/" /></a></h3>
          </div>
          <div>
            <h3><a href="#"> <img className="  border rounded" src={bgImg9} alt="/" /></a></h3>
          </div>
          {/* <div>
            <h3><a href="#"> <img className=" h-[250px] w-[380px] md:h-[300px] border rounded" src={bgImg10} alt="/" /></a></h3>
          </div> */}
          <div>
            <h3><a href="#"> <img className=" border rounded" src={bgImg11} alt="/" /></a></h3>
          </div>
        
        </Slider>
       </div>
       
        {/* <div  className=" mt-6 flex justify-center align-center  gap-4 ">
          <button className="button get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-blue-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" onClick={this.play}>
            Play
          </button>
          <button className="button get-started text-white font-bold px-8 py-4 rounded 
                    outline-none bg-blue-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150  " onClick={this.pause}>
            Pause
          </button>
        </div> */}
      </div>
    );
  }
}



