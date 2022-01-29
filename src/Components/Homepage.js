import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Howdoesitwork from "./Howdoesitwork";
import Howtosendmoney from "./Howtosendmoney";
import HowToUseTheApp from "./HowToUseTheApp";
import Introimage from "./intro/Introimage";
import Introtext from "./intro/Introtext";
import Navbar from "./Navbar";
import Support from "./Support";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <div className="intro">
          <Introtext/>
          <Introimage/>
        </div>
        <div className="howdoesitwork-container">
          <Howdoesitwork/>
        </div>
        <div className="howtousetheapp-container">
          <h5>--available @ google and ios app store only</h5>
          <HowToUseTheApp/>
        </div>
        <div className="howtousetheapp-container support-container">
          <h5>--support in any launguage</h5>
          <Support/>
        </div>
        <div className="howtosendmoney-container">
          <h2>How to send money</h2>
          <Howtosendmoney/>
        </div>
          <div className="contact-container">
            <Contact/>
          </div>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
