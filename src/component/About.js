import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A balanced Diet
        </h1>
        <p className="primary-text">
          Food Is An Important Part Of A balanced DietFood Is An Important Part
          Of A balanced Diet
        </p>
        <p className="primary-text">
          Food Is An Important Part Of A balanced DietFood Is An Important Part
          Of A balanced Diet
        </p>
        <div className="about-button-container">
          <button className="secondary-button">Learn more</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
