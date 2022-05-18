/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SlidingHero = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div>
          <img
            loading="lazy"
            src="/images/slider-1.jpg"
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/images/slider-2.jpg"
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/images/slider-3.jpg"
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/images/slider-4.jpeg"
            alt=""
            referrerPolicy="no-referrer"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default SlidingHero;
