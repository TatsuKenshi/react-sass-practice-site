import React from "react";
import "../styles/CreamSection.scss";
import gift from "../assets/gift.png";
import bus from "../assets/bus.png";
import card from "../assets/card.png";
import box from "../assets/box.png";

const CreamSection = () => {
  return (
    <section className="main">
      <div className="center-text">
        <h1>Good Gifts Made Easy</h1>
      </div>

      <div className="all-exp">
        <div className="exp">
          <div className="gift">
            <img src={gift} alt="" />
          </div>
          <p>Send as a gift</p>
          <p>Ship your gift with a personalized message</p>
        </div>

        <div className="exp">
          <div className="gift">
            <img src={bus} alt="" />
          </div>
          <p>Send as a gift</p>
          <p>Ship your gift with a personalized message</p>
        </div>

        <div className="exp">
          <div className="gift">
            <img src={card} alt="" />
          </div>
          <p>Send as a gift</p>
          <p>Ship your gift with a personalized message</p>
        </div>

        <div className="exp">
          <div className="gift">
            <img src={box} alt="" />
          </div>
          <p>Send as a gift</p>
          <p>Ship your gift with a personalized message</p>
        </div>
      </div>
    </section>
  );
};

export default CreamSection;
