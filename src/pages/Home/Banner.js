"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import BannerPage from "@/assets/Banner/Banaras-1.jpg";
import Travel from "@/assets/Banner/solo-traveler.jpg";
import manali from "@/assets/Banner/manali.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center mt-4 ">
      <div className="w-[80%] ">
        <Slider {...settings} className="">
          <div className="">
            <div className="flex justify-center items-center  ">
              <Image
                src={BannerPage}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center  ">
              <Image
                src={Travel}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center  ">
              <Image
                src={manali}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
