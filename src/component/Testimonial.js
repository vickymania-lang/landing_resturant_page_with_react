import React from "react";
import profilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What they are saying</h1>
        <p className="primary-text">
          What they are sayingWhat they are sayingWhat they are sayingWhat they
          are sayingWhat they are sayingWhat they are saying
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={profilePic} />
        <p>
          What they are sayingWhat they are sayingWhat they are sayingWhat they
          are sayingWhat they are sayingWhat they are saying
        </p>
        <div className="testimonial-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
