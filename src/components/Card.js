import React, { useState } from "react";
import Swiper from "react-id-swiper";
import data from "./data";
import "swiper/css/swiper.min.css";

function Card() {
  const params = {
    // init: false,
    loop: true,
    speed: 800,
    slidesPerView: 2,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
    // renderPrevButton: () => <button className='swiper-button-pre'>Prev</button>,
    // renderNextButton: () => <button className='swiper-button-nex'>Next</button>,
    spaceBetween: 30,
    containerClass: "customized-swiper-container",
    // grabCursor: true,
    mousewheelControl: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next.next",
      prevEl: ".swiper-button-prev.prev",
    },
    // Events
    // on: {
    //   imagesReady: function () {
    //     this.el.classList.remove("loading");
    //   },
    // },
    breakpoints: {
      1000: {
        slidesPerView: 1,
        grabCursor: true,
      },
    },
  };

  return (
    <div className='swipper'>
      <Swiper {...params} className='customized-swiper-container loading'>
        {data.map((s) => (
          <div
            key={s._id}
            className='swiper-slide'
            style={{
              backgroundImage: `url(${s.imgsrc})`,
            }}
          >
            <div className='content'>
              <p
                className='title'
                data-swiper-parallax='-60%'
                data-swiper-parallax-scale='.2'
              >
                Signature
              </p>
            </div>
          </div>
        ))}
      </Swiper>
      {/* <div className='lol'>a</div> */}
    </div>
  );
}

export default Card;
