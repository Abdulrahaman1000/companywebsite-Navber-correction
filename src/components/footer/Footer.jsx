import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <div className="bg-gray-800  h-[200px] md:h-[230px] p-12">
    <div className="">
    <h1 className="text-white text-center">Support Email: walex1257@gmail.com</h1>
      </div>
    <div className="flex justify-center text-3xl text-white mt-4 gap-8">
    <FaFacebook/>
    <FaInstagram/>
    <FaTwitter/>
      </div>
      <div className="mt-6">
        <h1 className="text-white text-center">
        © 2022 All rights reserved
        </h1>
        </div>
   </div>
   </>
  );
};

export default Footer;
