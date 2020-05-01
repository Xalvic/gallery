import React from "react";
import { useState } from "react";
import data from "./data";

function Card() {
  const [current, setCurrent] = useState(0);
  const { length } = data;

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const goToPrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  return (
    <div className='contain'>
      <h1>Test image carousel using react from scratch.</h1>
      <div className={`card-slider active-slide-${current}`}>
        <div
          className='wrapper'
          // style={{
          //   transform: `translateX(-${current * (100 / length)}%)`,
          // }}
        >
          {data.map((s, i) => (
            <div
              key={s._id}
              className={i === current ? "card active" : "card"}
              style={{
                backgroundImage: `url(${s.imgsrc})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className='buttons'>
        <h5 onClick={goToPrev}>Previous</h5>
        <h5 onClick={goToNext}>Next</h5>
      </div>
    </div>
  );
}

export default Card;
