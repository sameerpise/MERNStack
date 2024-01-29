import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
        <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="BigBox">
            <h1 className="title" style={{color: "#04AA6D"}}>Delicious</h1>
            <h1 className="title">Maharashriyan Food Only Here</h1>
            <h1 className="title" style={{color: "orange"}}>Get Your Table</h1>
            <Link className="btn">BookNow</Link>
            
            {/* <div className="wrapper title">
                <span className="first-text">Book Your Table</span>
                <ul className="sec-texts">
               <li><span>Now</span></li> 
                    <li><span>Web-Developer</span></li>
                     <li><span>Freelancer</span></li>
                     <li><span>Designer</span></li>
                </ul>
            </div> */}
          </div>
          {/* <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
              <img src="/logo.svg" alt="logo" className="logo" />
            </div>
          </div> */}
        </div>
        {/* <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
