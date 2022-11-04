import React, { useState } from "react";
import "./project.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Divider from "../../components/divider/Divider";
import { imgSlider } from "../../local data/dataImg";
import OnePro from "../../components/onePro/OnePro";
import { Navigation } from "swiper";
const Project = () => {
  return (
    <div className="project" id="project">
      <div className="project__content">
        <Divider text={"Clients We Work For"} />
        <h1>Our Recent Projects.</h1>
      </div>
      <div className="project__swipper">
        <Swiper
          modules={[Navigation]}
          loop
          navigation
          speed={800}
          spaceBetween={20}
          slidesPerView={3}
          className="project__swipper__swip"
        >
          {imgSlider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <OnePro {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
