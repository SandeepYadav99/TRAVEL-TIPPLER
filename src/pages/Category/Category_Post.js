"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import useCategoryName from "@/components/hooks/ConvertCaps";
import { useRouter } from "next/navigation";
import moment from "moment";

const Category_Post = ({ id, image, category, author, title, date, excerpt }) => {
  const router = useRouter();

  // const categoryType = useCategoryName(category);
  const wordLength = (detail) => {
    if (detail) {
      // const word = getFirstTwoLines(detail);
      return word;
    }
  };

  const headingHandler = (slug) => {
    router.push(`/category/${"categoryType"}/${slug}`);
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
            href={`/category/${"categoryType"}`}
            className="sm:block hidden float-left absolute z-10 text-sm m-2 text-bold text-left top-0 font-serif bg-[#0000004D] hover:bg-[#777777] text-white px-[6px] rounded-sm"
          >
            {category}
          </Link>
          <div className="flex flex-col  ">
            <a
              onClick={() => headingHandler(slug)}
              dangerouslySetInnerHTML={{ __html: title }}
              className="mo:text-[20px] text-[#000] font-semibold w-full hover:text-blue-600 cursor-pointer line-clamp-3"
            ></a>
            
            <div className=" text-gray-400  flex w-full ">
              <p className=" text-black font-medium text-md font-serif hidden mo:block">
                {author}
              </p>
              <strong className="text-gray-[#999999] mo:ml-3 mo:text-sm">{moment(date).format('MMMM DD, YYYY')}</strong>
            </div>
          </div>
        </div>

        {/* <p dangerouslySetInnerHTML={{__html:excerpt.rendered}} className="mt-[10px] text-md float-left  text-justify text-[#222222] font-serif line-clamp-2 mr-11 mt-4 sm:float-none sm:mr-0 whitespace-normal hidden mo:block">
         
        </p> */}
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} >
        </div>
      </div>
      <hr className=" clear-left  mx-[2%] mt-[4%] " />
    </div>
  );
};

export default Category_Post;
