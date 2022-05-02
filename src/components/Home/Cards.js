import React from "react";
import "./css/Cards.css";
import sampleImage from "../../assets/Cards.png";

const Cards = () => {
  return (
    <section className="cards_container_three">
      <img src={sampleImage} alt="cards" className="card_image_one" />
    </section>
  );
};

export default Cards;
