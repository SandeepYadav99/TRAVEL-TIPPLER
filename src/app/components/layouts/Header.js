"use client";

import Image from "next/image";
import logo from "@/assets/Travel-Tippler-1.png";
import { IconHamburger } from "../global/Icons";
import ImgSearch from "@/assets/search.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const openHandler = () => {
    setMobileMenuVisible(true);
  };

  const closeHandler = () => {
    setMobileMenuVisible(false);
  };

  return (
    <header className="top-0 left-0  right-0 nw-full  bg-white text-black py-4 px-6 shadow-md flex justify-around items-center">
      <div>
        <Image src={logo} alt="logo" width={350} height={350} />
      </div>
      <nav className="xl:flex items-center hidden">
        <div className="mr-4 text-2xl">Home</div>
        <div className="mr-4 text-2xl">Itinerary</div>
        <div className="mr-4 text-2xl">Web Story</div>
        <div className="mr-4 text-2xl">Web Story</div>
        <div className="mr-4 text-2xl">About Us</div>
      </nav>
      <div>
        <div className="xl:flex items-center justify-center hidden">
          <input
            className="border-2 p-3 rounded-md"
            type="search"
            placeholder="Search "
            aria-label="Search"
          />
          <button className=" bg-blue-300 p-3" type="submit">
            <Image
              src={ImgSearch}
              alt="travil"
              height={"24px"}
              className=""
              color="white"
            />
          </button>
        </div>
      </div>
      <button
        className="flex items-center border-2 p-2 rounded xl:hidden"
        onClick={openHandler}
      >
        <IconHamburger fill={"black"} />
      </button>

      <div
        className={`xl:hidden fixed top-0 left-0 w-full h-full bg-white text-black py-2 px-4 ${
          mobileMenuVisible ? "block w-full h-full z-10" : "hidden"
        }  `}
      >
        <div className="flex justify-between ">
          <div className="bg-white text-black py-2 px-4 ">
            <div className="block my-2 text-2xl">Home</div>
            <div className="block my-2 text-2xl">Itinerary</div>
            <div className="block my-2 text-2xl">Web Story</div>
            <div className="block my-2 text-2xl">Web Story</div>
            <div className="block my-2 text-2xl">About Us</div>
          </div>
          <button
            className={`xl:hidden  ${mobileMenuVisible ? "block " : "hidden"}`}
            onClick={closeHandler}
          >
            Close
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
