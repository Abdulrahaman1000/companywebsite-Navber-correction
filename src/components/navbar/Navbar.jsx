import React, { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import bgImg from "../../assets/kwaraTechh.png";


import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed  flex flex-wrap bg-white h-20 justify-between fixed w-full z-20 top-0 ">
      <div className="w-full md:mx-20 mx-4 flex flex-wrap items-center justify-between">
        <div className="w-full  flex justify-between cursor-pointer md:w-auto md:static md:block md:justify-start">
          <Link to="home" smooth={true} duration={500}>
            <img className="mx-6" src={bgImg} width={100} alt="/" />
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <MenuIcon className="w-5 py-8" />
            ) : (
              <XIcon className="w-5 py-8" />
            )}
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="absolute  z-50 left-0 top-24 md:inset-0 md:relative cursor-pointer md:flex flex-col md:flex-row list-none md:ml-auto md:text-white text-center w-full  md:w-fit  text-base md:space-x-10 bg-white md:bg-transparent divide-y divide-slate-200 md:divide-y-0">
            <li className="nav-item text-black font-bold p-2 md:p-0 hover:bg-blue-400 md:hover:bg-transparent">
              <Link to="hero" smooth={true} offset={-200} duration={500} >
                HOME
              </Link>
            </li>
            <li className="nav-item text-black font-bold  p-2 md:p-0 cursor-pointer hover:bg-blue-400 md:hover:bg-transparent">
              <Link to="courses" smooth={true} offset={-200} duration={500}>
                ALL COURSES
              </Link>
            </li>

            <li className="nav-item text-black font-bold  p-2 md:p-0 cursor-pointer hover:bg-blue-400 md:hover:bg-transparent">
              <Link to="gallery" smooth={true} offset={-100} duration={500}>
                GALLERY
              </Link>
            </li>
            <li className="nav-item text-black font-bold  p-2 md:p-0 cursor-pointer hover:bg-blue-400 md:hover:bg-transparent">
            <Link to="blog"  smooth={true} offset={-200} duration={500}>
                BLOGS
              </Link>
            </li>
            {/* <li className="nav-item p-2 md:p-0 cursor-pointer hover:bg-blue-400 md:hover:bg-transparent">
              <Link to="Partners" smooth={true} offset={-100} duration={500}>
                OUR PARTNERS
              </Link>
            </li> */}
            <li className="nav-item text-black font-bold  p-2 md:p-0 cursor-pointer hover:bg-blue-400 md:hover:bg-transparent">
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
