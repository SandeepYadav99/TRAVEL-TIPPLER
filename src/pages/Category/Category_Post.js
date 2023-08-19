"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import useCategoryName from "@/components/hooks/ConvertCaps";
import { useRouter } from "next/navigation";

const Category_Post = ({ id, image,category,  aurther,heading , date, description}) => {
 
  const router = useRouter();

  const categoryType = useCategoryName(category);
  const wordLength = (detail) => {
    if (detail) {
      const word = getFirstTwoLines(detail);
      return word;
    }
  };

  const headingHandler = (id) => {
    router.push(`/category/${categoryType}/${id}`);
  };
  
  return (
    <div key={id} className="">
     
      <div className="mo:p-1 pt-1 w-full ">
        <div className="relative m-3 cursor-pointer ">
          <Image
            src={image}
            className="rounded-md mo:mr-5 mr-1.5 float-left w-[90px] h-[90px] sm:w-[330px] sm:h-[220px] mb-4 mo:w-[150px] mo:h-[120px] "
            alt="Travel"
            width={80}
            height={80}
          />
          <Link
            href={`/category/${categoryType}`}
            className="sm:block hidden float-left absolute z-10 text-sm m-2 text-bold text-left top-0 font-serif bg-[#0000004D] hover:bg-[#777777] text-white px-[6px] rounded-sm"
          >
            {category}
          </Link>
          <div className="flex flex-col  ">
            <a
              onClick={() => headingHandler(id)}
              className="mo:text-[20px] text-[#000] font-semibold w-full hover:text-blue-600 cursor-pointer line-clamp-3"
            >
              {heading}
            </a>

            <div className=" text-gray-400  flex w-full ">
              <p className=" text-black font-medium text-md font-serif hidden mo:block">
                {aurther}
              </p>
              <strong className="text-gray-[#999999] mo:ml-3 mo:text-sm">{date}</strong>
            </div>
          </div>
        </div>

        <p className="mt-[10px] text-md float-left  text-justify text-[#222222] font-serif line-clamp-2 mr-11 mt-4 sm:float-none sm:mr-0 whitespace-normal hidden mo:block">
          {wordLength(description)}
        </p>
      </div>
      <hr className=" clear-left  mx-[2%] mt-[4%] " />
    </div>
  );
};

export default Category_Post;
