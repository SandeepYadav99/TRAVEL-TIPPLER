import React from "react";
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import Facebook from "@/assets/facbook.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" left-0 right-0 w-full bg-black  ">
      <div className="">
        <ul className="text-white flex justify-around flex-wrap list-disc">
          <div className="mt-8">
            <li className="p-2 font-sans text-xl">Delhi to Shimla Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Rishikesh Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Kasol Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Chandigarh Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Dehradun Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Manali Bus</li>
          </div>
          <div className="mt-8">
            <li className="p-2 font-sans text-xl">Jamnagar to Rajkot Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Lucknow Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Varanasi Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Jaipur Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Dharamshala Bus</li>
            <li className="p-2 font-sans text-xl">Ahmedabad to Pune Bus</li>
          </div>
          <div className="mt-8">
            <li className="p-2 font-sans text-xl">Mumbai to Goa Bus</li>
            <li className="p-2 font-sans text-xl">Bhopal to Indore Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Jammu Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Udaipur Bus</li>
            <li className="p-2 font-sans text-xl">Ahmedabad to Mumbai Bus</li>
            <li className="p-2 font-sans text-xl">Delhi to Katra Bus</li>
          </div>
        </ul>
      </div>

      <ul className="text-white flex justify-center">
        <Link
          href={"https://www.zingbus.com/distance"}
          className="p-2 font-sans text-lg"
        >
          DISTANCE CALCULATOR
        </Link>
        <Link
          href={"https://www.zingbus.com/blog/"}
          className="p-2 font-sans text-lg"
        >
          ZINGBUS BLOG
        </Link>
        <Link
          href={"https://www.zingbus.com/blog/zing-electric-shared-cab/"}
          className="p-2 font-sans text-lg"
        >
          ZING ELECTRIC
        </Link>
        <Link
          href={"https://www.zingbus.com/"}
          className="p-2 font-sans text-lg"
        >
          BUS TICKET BOOKING
        </Link>
      </ul>
      <div className="text-white text-center text-xl">
        <p>© 2023 All Rights Reserved TravelTippler</p>
      </div>
      <ul className="flex justify-center mt-2">
        <a>
          <Image
            src={Twitter}
            height="30"
            width="30"
            alt="Twitter"
            className="cursor-pointer transition-transform transform hover:scale-110 "
          />
        </a>
        <a>
          <Image
            src={Instagram}
            height="30"
            width="30"
            alt="Instagram"
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
        </a>
        <a>
          <Image
            src={Facebook}
            height="30"
            width="30"
            alt="Facebook"
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
          Facebook
        </a>
        <a>
          <Image
            src={Twitter}
            height="30"
            width="30"
            alt="Twitter"
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
        </a>
        <a>
          <Image
            src={Instagram}
            height="30"
            width="30"
            alt="Instagram"
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
        </a>
        <a>
          <Image
            src={Facebook}
            height="30"
            width="30"
            alt="Facebook"
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
