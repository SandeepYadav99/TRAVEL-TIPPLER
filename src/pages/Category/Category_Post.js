"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import useCategoryName from "@/components/hooks/ConvertCaps";
import { useRouter } from "next/navigation";

const Category_Post = ({ category, catageryId }) => {
  const router = useRouter();

  const categoryType = useCategoryName(category?.category);
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
    <div key={catageryId} className="">
      <div className="p-5 ">
        <div className="relative m-3 cursor-pointer ">
          <Image
            src={category?.image}
            className="rounded-md mr-11 float-left sm:w-[330px] sm:h-[220px] mb-4"
            alt="Travel"
            width={180}
            height={80}
          />
          <Link
            href={`/category/${categoryType}`}
            className="sm:block hidden float-left absolute z-10 text-md m-2 text-bold text-left top-0 bg-[#777] hover:bg-[#686363]  text-white p-1 rounded-sm"
          >
            {category?.category}
          </Link>
          <div className="flex flex-col  ">
            <a
              onClick={() => headingHandler(category.id)}
              className="text-2xl font-bold  hover:text-blue-600 cursor-pointer line-clamp-3"
            >
              {category?.heading}
            </a>

            <div className=" text-gray-400  flex">
              <p className=" text-black font-medium text-lg">
                {category?.aurther}
              </p>
              <strong className="text-gray-400 ml-3">{category?.date}</strong>
            </div>
          </div>
        </div>

        <p className=" text-xl float-left  text-justify  line-clamp-2 mr-11 mt-4 sm:float-none sm:mr-0 ">
          {wordLength(category?.detail.description)}
        </p>
      </div>
      <hr className=" clear-left  mx-[2%] mt-[4%] " />
    </div>
  );
};

export default Category_Post;
