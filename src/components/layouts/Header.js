"use client";
import Image from "next/image";
import logo from "@/assets/Travel-Tippler-1.png";
import { IconClose, IconHamburger } from "../global/Icons";
import ImgSearch from "@/assets/search.svg";
import { useState } from "react";
import Link from "next/link";

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
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={350} height={350} />
      </Link>
      <nav className="lg:flex items-center hidden">
        <div className="mr-4 text-2xl">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="mr-4 text-2xl">
          {" "}
          <Link href={"https://www.zingbus.com/"}>Zingbus</Link>
        </div>
        <div className="mr-4 text-2xl">
          {" "}
          <Link href={"/itinerary"}>Itinerary</Link>
        </div>
        <div className="mr-4 text-2xl">
          <Link href={"/web-story"}>Web Story</Link>
        </div>
        <div className="mr-4 text-2xl">
          <Link href={"/about-us"}>About Us</Link>
        </div>
      </nav>
      <div>
        <div className="lg:flex items-center justify-center hidden">
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
              className="lg:p-3 "
              color="white"
            />
          </button>
        </div>
      </div>
      <button
        className="flex items-center border-2 p-2 rounded lg:hidden"
        onClick={openHandler}
      >
        <IconHamburger fill={"black"} />
      </button>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white text-black py-2 px-4 ${
          mobileMenuVisible ? "block w-full h-full z-10" : "hidden"
        }  `}
      >
        <div className="flex justify-between ">
          <div className="bg-white text-black py-2 px-4 ">
            <div className="mr-4 text-2xl">
              <Link href={"/"} onClick={closeHandler}>
                Home
              </Link>
            </div>
            <div className="mr-4 text-2xl">
              {" "}
              <Link href={"https://www.zingbus.com/"} onClick={closeHandler}>
                Zingbus
              </Link>
            </div>
            <div className="mr-4 text-2xl">
              {" "}
              <Link href={"/itinerary"} onClick={closeHandler}>
                Itinerary
              </Link>
            </div>
            <div className="mr-4 text-2xl">
              <Link href={"/web-story"} onClick={closeHandler}>
                Web Story
              </Link>
            </div>
            <div className="mr-4 text-2xl">
              <Link href={"/about-us"} onClick={closeHandler}>
                About Us
              </Link>
            </div>
          </div>
          <button
            className={`lg:hidden  ${
              mobileMenuVisible ? "block -mt-[10%]" : "hidden"
            }`}
            onClick={closeHandler}
          >
            <IconClose fill={"black"} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
