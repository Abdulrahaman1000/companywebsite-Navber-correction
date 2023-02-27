import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import bgImg from "../assets/contact.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ffj1lnr",
        "template_6hhtedw",
        form.current,
        "WTvAL-rRyCLVnoHr2"
      )
      .then(
        (result) => {
          console.log(alert("mail sent successfully"));
        },
        (error) => {
          console.log(alert("mail not successfully sent"));
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact w-full bg-black mt-6  py-4  px-4">
      {/* <div className="p-4">
        <h1 className="md:text-5xl text-center  sm:text-3xl text-2xl font-bold ">
          Contact Us
        </h1>
      </div> */}
      <div className=" py-8  mx-auto flex space-around grid md:grid-cols-2">
      <div className="contact_form w-auto md:w-full mr-20">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex justify-center">
                <div className="mb-3 w-full">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label inline-block pb-2 mb-2 font-bold text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="name
                  form-control
                  block
                  w-full
                  h-12 
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded-lg 
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                    id="exampleFormControlInput1"
                    placeholder="Full-Name"
                    name="user_name"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-3 w-full ">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label inline-block  pb-2 mb-2 font-bold text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="text"
                    className="email
 
        form-control
        block
        w-full
        h-12 
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg 
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlInput1"
                    placeholder="Enter your email"
                    name="user_email"
                  />
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 w-full">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label inline-block  pb-2 mb-2 text-white font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    className="msg form-control
          block
          w-full
          h-60 
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-lg 
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type your message"
                    name="user_message"
                  ></textarea>
                </div>
              </div>

              <div className="w-full">
                <div className='text-center mt-4'>
                        <input type="submit" name="submit" value="send message" 
                        className="form-control flex w-full justify-center text-white font-bold px-8 py-4 rounded 
                        outline-none bg-orange-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                        active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg 
                        ease-linear transition-all duration-150"/>
                    </div>
                {/* <button
                  type=""
                  className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded-lg shadow-md hover:bg-purple-700 text-white hover:shadow-lg focus:bg-blue-700 text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send Message
                </button> */}
              </div>
            </form>
          </div>
        <div className="flex flex-col md:flex-row justify-center xl:mt-1 sm:mt-16 ">

          <div className="mt-12">
         <div className="ml-20">
          <h1 className="text-white text-1xl">We weould love to ear from you!</h1>
          <h1 className="text-orange-600 font-bold text-5xl bg-lightBlue-500 mt-8">Contact Us</h1>
          <p className="text-white text-1xl mt-8">
            These is us, we work as a team. So every feedback you provide, 
          any suggestions you have and any new idea you like to share — 
          please don’t hesitate, write to us immediately.
          </p>
          <p className="text-white text-1xl mt-8">
            These is us, we work as a team. So every feedback you provide, 
          any suggestions you have and any new idea you like to share — 
          please don’t hesitate, write to us immediately.
          </p>
          <div className="flex text-3xl text-white mt-8 gap-8">
    <FaFacebook/>
    <FaInstagram/>
    <FaTwitter/>
      </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
