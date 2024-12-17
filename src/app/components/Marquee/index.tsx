import React, { useEffect, useRef } from "react";
import "./marquee.scss";

const words: string[] = [
  "SAÚDE",
  "VITÓRIA",
  "REPETIÇÃO",
  "DISCIPLINA",
  "DEDICAÇÃO",
  "PERSISTÊNCIA",
  "CAPACIDADE",
  "GARRA",
  "POTENCIAL",
  "DISPOSIÇÃO",
  "FORÇA",
  "VONTADE",
];

const MarqueeWords: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.cloneNode(true) as HTMLDivElement;
      marquee.parentElement?.appendChild(clone);
    }
  }, []);

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content" ref={marqueeRef}>
        {words.map((word, index) => (
          <span key={index} className="marquee-word">
            {word}
          </span>
        ))}
        {words.map((word, index) => (
          <span key={index + words.length} className="marquee-word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeWords;
