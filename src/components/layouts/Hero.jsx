import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../../assets/images/hero/banner1.jpeg";
import banner2 from "../../assets/images/hero/banner2.jpeg";
import banner3 from "../../assets/images/hero/banner3.jpeg";
import banner4 from "../../assets/images/hero/banner4.jpeg";
import banner5 from "../../assets/images/hero/banner5.jpeg";
import banner1xl from "../../assets/images/hero/banner1xl.jpeg";
import banner2xl from "../../assets/images/hero/banner2xl.jpeg";
import banner3xl from "../../assets/images/hero/banner3xl.jpeg";
import banner4xl from "../../assets/images/hero/banner4xl.jpeg";
import banner5xl from "../../assets/images/hero/banner5xl.jpeg";
import "../../styles/Hero.css";

function Hero() {
  const images = [
    { mobile: banner1, desktop: banner1xl },
    { mobile: banner2, desktop: banner2xl },
    { mobile: banner3, desktop: banner3xl },
    { mobile: banner4, desktop: banner4xl },
    { mobile: banner5, desktop: banner5xl },
  ];
  const [activedSlide, setactivedSlide] = useState(0);

  return (
    <div className="relative mt-25">
      <Swiper
        className="w-full"
        modules={[Navigation, Autoplay]}
        navigation
        centeredSlides
        loop
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setactivedSlide(swiper.realIndex)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full">
              <picture className="block w-full h-full">
                <source
                  className="block h-full w-full "
                  media="(min-width: 1024px)"
                  srcSet={img.desktop}
                />
                <img
                  className="h-full w-full max-h-110 lg:max-h-120"
                  src={img.mobile}
                  alt=""
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-3 right-1/2 translate-x-1/2 z-1 flex gap-x-1">
        {images.map((_, index) => (
          <div
            className={` h-2 bg-white rounded-full ${activedSlide === index ? "w-4" : "w-2"}`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
