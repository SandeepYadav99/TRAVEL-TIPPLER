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
import { useRouter } from "next/navigation";

const Banner = () => {
  const router= useRouter()
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
    // <div className="w-full mx-auto flex justify-center items-center -mt-8 relative m-[2%] ">
    <div className="relative flex justify-between items-center">
      <div className=" absolute z-10 py-[15%] px-[5%]">
        <button className="cursor-pointer p-2 bg-teal-900" onClick={previous}>
          <Image src={ImgPrev} alt="Travel" />
        </button>
      </div>
      {/* <div className="w-full lg:w-[85%] mt-[4%] lg:mt-[2%] p-3 "> */}
      <div className="w-full px-[5%] mt-2">
        <Slider {...settings} ref={slider} className="">
          <div className="">
            <div className="flex flex-col justify-center items-center  md:flex-row md:items-start">
              <Image
                src={BannerPage}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg xl:w-full"
              />
            </div>
            <div className="absolute md:-mt-[1%] bottom-10 ml-11">
              <button
                onClick={() => router.push("/category/travel-blogs")}
                className="bg-blue-500 text-white rounded hover:bg-gray-400 hover:text-white cursor-pointer p-2"
              >
                Travel Blogs
              </button>
              <Link href={"/category/travel-blogs/1"}>
                <p className="text-white text-2xl">
                  5 Best Places to visit in Varanasi – The spiritual <br />{" "}
                  capital of India
                </p>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center items-center  md:flex-row md:items-start">
              <Image
                src={Travel}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg xl:w-full"
              />
            </div>
            <div className="absolute md:-mt-[1%] ml-5 bottom-10">
              <button
                onClick={() => router.push("/category/health-travel")}
                className="bg-blue-500 text-white rounded hover:bg-gray-400 hover:text-whitecursor-pointer p-2"
              >
                Health & Travel
              </button>
              <Link href={"category/health-travel"}>
                <p className="text-white text-2xl">
                  8 Travel Tips for Introverts: Solo Travel at Your Own Pace
                </p>
              </Link>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col justify-center items-center  md:flex-row md:items-start">
              <Image
                src={manali}
                alt="banner"
                className=" w-full h-[60vh] rounded-lg xl:w-full"
              />
            </div>
            <div className="absolute md:-mt-[1%] ml-5 bottom-10">
              <button
                onClick={() => router.push("/category/travel-itinerary")}
                className="bg-blue-500 text-white rounded hover:bg-gray-400 hover:text-whitecursor-pointer p-2"
              >
                Travel Itinerary
              </button>
              <Link href={"/category/travel-itinerary"}>
                <p className="text-white text-2xl">
                  Experiencing Manali: A 5-Day Travel Itinerary for <br />{" "}
                  Adventure and Tranquility
                </p>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <div className="absolute z-10 right-0 py-[15%] px-[5%]">
        <button className="cursor-pointer bg-teal-900 p-2" onClick={next}>
          <Image src={ImgNext} alt="Travel " className=" " />
        </button>
      </div>
    </div>
  );
};

export default Banner;
