import React from "react";
import "./marquee.scss";

const words = ["SUPERAÇÃO", "MOTIVAÇÃO", "AUTO CONFIANÇA", "MENTE", "CORPO", "VIDA"];

const MarqueeWords = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {[...words, ...words].map((word, index) => (
          <div key={index} className="marquee-word">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeWords;
