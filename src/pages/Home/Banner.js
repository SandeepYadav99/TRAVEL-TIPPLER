"use client";
import React, { useRef, useState } from "react";
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
  const [isActiveButton, setIsActiveButton] = useState(false)
  const router = useRouter();
  const slider = useRef();

  const handalMouse_Enter = () => {
    setIsActiveButton(true)
  }

  const handalMouse_Leave = () => {
    setIsActiveButton(false)
  }

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
    <div className=" flex justify-between items-center mx-[4%] overflow-hidden " onMouseOver={handalMouse_Enter} onMouseLeave={handalMouse_Leave}>
      <div className=" absolute z-10  ">
        <button
          className={isActiveButton ? "cursor-pointer  bg-[#0000004D] p-2 rounded-sm " : "hidden"}
          onClick={previous}
        >
          <Image src={ImgPrev} alt="Travel" />
        </button>
      </div>
      <div className="w-full  mt-2 ">
        <Slider {...settings} ref={slider} className="" >
          <div className="" >
            <Image
              src={BannerPage}
              alt="banner"
              className="relative w-full h-[30vh] mo:h-[40vh] sm:h-[60vh] rounded-lg md:w-full"
            />
            <a
              onClick={() => router.push("/category/travel-blogs")}
              className=" bg-blue-500 absolute bottom-16 ml-4 font-normal text-white  hover:bg-[#0000004d] cursor-pointer  font-lg rounded"
            >
              Travel Blogs
            </a>
            <Link href={"/category/travel-blogs/1"}>
              <p className="text-white text-2xl bottom-4 ml-4 truncate overflow-hidden md:w-full w-[10%] absolute ">
                5 Best Places to visit in Varanasi – The spiritual capital of
                India
              </p>
            </Link>
          </div>

          <div className="">
            <Image
              src={Travel}
              alt="banner"
              className="relative w-full h-[30vh] mo:h-[40vh] sm:h-[60vh] rounded-lg md:w-full"
            />
            <a
              onClick={() => router.push("/category/health-travel")}
              className="bg-blue-500 absolute bottom-16 ml-8  text-bold text-white hover:bg-[#0000004D]  cursor-pointer  font-lg rounded"
            >
              Health & Travel
            </a>
            <Link href={"/category/travel-blogs/1"}>
              <p className="text-white text-2xl bottom-4 ml-8 truncate overflow-hidden md:w-full w-[10%] absolute ">
                8 Travel Tips for Introverts: Solo Travel at Your Own Pace
              </p>
            </Link>
          </div>
          <div className="">
            <Image
              src={manali}
              alt="banner"
              className="relative w-full h-[30vh] mo:h-[40vh] sm:h-[60vh] rounded-lg md:w-full"
            />
            <a
              onClick={() => router.push("/category/travel-itinerary")}
              className="bg-blue-500 absolute bottom-16 ml-8  text-bold text-white hover:bg-[#0000004D]  cursor-pointer font-lg rounded"
            >
              Travel Itinerary
            </a>
            <Link href={"/category/travel-blogs/1"}>
              <p className="text-white text-2xl bottom-4 ml-8 truncate overflow-hidden md:w-full w-[10%] absolute ">
                Experiencing Manali: A 5-Day Travel Itinerary for Adventure and
                Tranquility
              </p>
            </Link>
          </div>
        </Slider>
      </div>
      <div className="absolute z-10 right-0 p-[5%] z ">
        <button className={isActiveButton ? "cursor-pointer  bg-[#0000004D] p-2 rounded-sm -mr-2" : "hidden"} onClick={next}>
          <Image src={ImgNext} alt="Travel " className=" " />
        </button>
      </div>
    </div>
  );
};

export default Banner;
