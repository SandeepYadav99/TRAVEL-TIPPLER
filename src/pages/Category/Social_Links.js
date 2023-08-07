import Image from "next/image";
import React from "react";
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import Facebook from "@/assets/facbook.svg";

const SocialLinks = () => {
  return (
    <div className="shadow-md border-2  mx-[2%] mt-[1%] ">
      <h1 className="text-2xl font-bold ml-4 mt-2">Follow Us</h1>
      <hr className="m-4" />
      {/* lg:grid md:grid-cols-2 m-[2%] md:w-[30vw] */}
      <div className="flex justify-between items-center flex-wrap ">
        <li className="flex justify-center m-3 items-center cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Twitter}
            height={50}
            width={50}
            className=""
            alt="Travel"
          />
          <span className="text-[#1da1f2] text-xl font-sans ml-3">Twitter</span>
        </li>
        <li className="flex justify-center items-center m-3 cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Instagram}
            height={40}
            width={40}
            className=""
            alt="Travel"
          />
          <span className="text-[#f00075] text-xl font-sans ml-3">
            Instagram
          </span>
        </li>
        <li className="flex justify-center items-center m-3 cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Facebook}
            height={40}
            width={40}
            className=""
            alt="Travel"
          />
          <span className="text-[#1778f2] text-xl font-sans ml-3">
            Facebook
          </span>
        </li>

        {/* New list  */}

        <li className="flex justify-center items-center m-3 cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Twitter}
            height={50}
            width={50}
            className=""
            alt="Travel"
          />
          <span className="text-[#1da1f2] text-xl font-sans ml-3">Twitter</span>
        </li>
        <li className="flex justify-center items-center m-3 cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Instagram}
            height={40}
            width={40}
            className=""
            alt="Travel"
          />
          <span className="text-[#f00075] text-xl font-sans ml-3">
            Instagram
          </span>
        </li>
        <li className="flex justify-center items-center m-3 cursor-pointer transition-transform transform hover:scale-110">
          <Image
            src={Facebook}
            height={40}
            width={40}
            className=""
            alt="Travel"
          />
          <span className="text-[#1778f2] text-xl font-sans ml-3">
            Facebook
          </span>
        </li>
      </div>
    </div>
  );
};

export default SocialLinks;
