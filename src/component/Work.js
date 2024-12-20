import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoDate = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Food Is An Important Part Of A balanced DietFood Is An Important Part.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Food Is An Important Part Of A balanced DietFood Is An Important Part.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliver",
      text: "Food Is An Important Part Of A balanced DietFood Is An Important Part.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          Food Is An Important Part Of A balanced DietFood Is An Food Is An
          Important Part Of A balanced DietFood Is An Food Is An Important Part
          Of A balanced DietFood Is An Food Is An Important Part Of A balanced
          DietFood Is An
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoDate.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
