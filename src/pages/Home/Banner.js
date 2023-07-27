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
    <div className="w-full mx-auto flex justify-center items-center -mt-8 relative m-[2%] ">
      {/* <div className=" absolute z-10 lg:left-[10%] right-0 left-0">
        <button className="cursor-pointer p-2 bg-teal-900" onClick={previous}>
          <Image src={ImgPrev} alt="Travel" />
        </button>
      </div> */}
      <div className="w-full lg:w-[80%] mt-[4%] lg:mt-[2%] p-3 ">
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
              <div className="lg:-mt-[5%] -mt-[15%]">
                <Link
                  href={"category/travel-blogs"}
                  className="bg-blue-600 text-2xl p-2 rounded-md text-white"
                >
                  Travel Blogs
                </Link> 
                <div className="">
                  <Link
                    href={"/category/travel-blogs/1"}
                    className="text-white mt-2  break-words md:text-3xl text-xl  "
                  >
                    5 Best Places to visit in Varanasi – <br /> The spiritual
                    capital of India
                  </Link>
                </div>
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
              <div className="lg:-mt-[5%] -mt-[15%] ">
                <Link
                  href={"category/health-travel"}
                  className="bg-blue-600 text-2xl p-2 rounded-md text-white"
                >
                  Health & Travel
                </Link>{" "}
                <br />
                <Link
                  href={"/category/health-travel/2"}
                  className="text-white text-3xl mt-2 text-justify"
                >
                  8 Travel Tips for Introverts: Solo <br /> Travel at Your Own
                  Pace
                </Link>
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
              <div className="-mt-[15%] lg:-mt-[5%] ">
                <Link
                  href={"category/travel-itinerary"}
                  className="bg-blue-600  text-2xl p-2 rounded-md text-white"
                >
                  Travel Itinerary
                </Link>{" "}
                <br />
                <Link
                  href={"/category/travel-itinerary/3"}
                  className="text-white -mt-2 text-3xl break-words  "
                >
                  Experiencing Manali: A 5-Day Travel Itinerary for <br />{" "}
                  Adventure and Tranquility
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className="p-2 bg-teal-900 z-10   right-0  left-0">
        <button className="cursor-pointer" onClick={next}>
          <Image src={ImgNext} alt="Travel " className=" " />
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
