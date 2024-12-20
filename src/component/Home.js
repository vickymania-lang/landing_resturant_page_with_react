import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Faourite Food Delivered Hot and Fresh
          </h1>
          <p className="primary-text">
            Your Faourite Food Delivered Hot and Fresh
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} />
        </div>
      </div>
    </div>
  );
}

export default Home;
