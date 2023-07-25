"use client";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import BannerPage from "@/assets/Banner/Banaras-1.jpg";
import Travel from "@/assets/Banner/solo-traveler.jpg";
import manali from "@/assets/Banner/manali.jpg";
import ImgNext from "@/assets/next.svg";
import ImgPrev from "@/assets/prev.svg";
import Link from "next/link";

const Banner = () => {
  const slider = useRef();

  const previous = () => {
    slider.current.slickPrev();
  };

  const next = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="lg:w-full flex justify-center items-center mt-4 relative">
      <div className=" absolute z-10 left-[10%]">
        <button className="cursor-pointer p-2 bg-teal-900" onClick={previous}>
          <Image src={ImgPrev} alt="Travel" />
        </button>
      </div>
      <div className="w-[80%]  ">
        <Slider {...settings} ref={slider} className="cursor-pointer">
          <div className="">
            <div className="flex flex-col justify-center items-center  md:flex-row md:items-start">
              <div className="md:w-full md:mr-4">
                <Image
                  src={BannerPage}
                  alt="banner"
                  className=" w-full h-[60vh] rounded-lg xl:w-full"
                />
              </div>
            </div>
            <div className="absolute -mt-[1%] ml-5  flex justify-center items-start  ">
              <div className="sm:-mt-[5%] ">
                <Link
                  href={"category/travel-blogs"}
                  className="bg-blue-600 text-2xl p-2 rounded-md text-white"
                >
                  Travel Blogs
                </Link>
                <p className="text-white text-2xl mt-3 md:text-3xl text-justify">
                  5 Best Places to visit in Varanasi – The spiritual capital of
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center relative ">
              <Image
                src={Travel}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg"
              />
            </div>
            <div className="absolute -mt-[1%] ml-5 ">
              <div className="sm:-mt-[5%] ">
                <Link
                  href={"category/health-travel"}
                  className="bg-blue-600 text-2xl p-2 rounded-md text-white"
                >
                  Health & Travel
                </Link>
                <p className="text-white text-3xl mt-5 text-justify">
                  8 Travel Tips for Introverts: Solo Travel at Your Own Pace
                </p>
              </div>
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
            <div className="absolute -mt-[1%] ml-5 ">
              <div className="sm:-mt-[5%]">
                <Link
                  href={"category/travel-itinerary"}
                  className="bg-blue-600 text-2xl p-2 rounded-md text-white"
                >
                  Travel Itinerary
                </Link>
                <p className="text-white  text-3xl mt-5  ">
                  Experiencing Manali: A 5-Day Travel Itinerary for Adventure
                  and Tranquility
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="p-2 bg-teal-900 z-10 -ml-6">
        <button className="cursor-pointer" onClick={next}>
          <Image src={ImgNext} alt="Travel " className=" " />
        </button>
      </div>
    </div>
  );
};

export default Banner;
