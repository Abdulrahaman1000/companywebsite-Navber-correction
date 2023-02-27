

import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

import Hero from './hero/Hero';
import About from './about/About';
import Contact from './contact/Contact';
import Courses from './courses/Courses';
import Testimony from './testimony/Testimony';
import Gallery from './gallery/Gallery';
import Team from './team/Team';
import Blog from './blog/Blog';
import Footer from '../footer/Footer'


export default class Homepage extends Component {
	render() {
        return (
            <div className="font-Quicksand ">
              <Navbar/>
              <Hero/>
              <About />
              <Courses />
              <Gallery/>
              <Testimony/>
              <Team/>
              <Blog/>
              <Contact />
              <Footer/> 
            </div>
          );
        
	}
}
