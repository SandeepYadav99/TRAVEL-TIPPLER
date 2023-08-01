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
            className="rounded-md mr-11 float-left th:w-[300px] th:h-[200px]"
            alt="Travel"
            width={150}
            height={150}
          />
          <Link
            href={`/category/${categoryType}`}
            className="th:block hidden float-left absolute z-10 text-xl m-2 text-bold text-left top-0 bg-neutral-500 hover:bg-blue-500  text-white  p-1"
          >
            {category?.category}
          </Link>
          <a
            onClick={() => headingHandler(category.id)}
            className="text-2xl font-bold mt-4 hover:text-blue-600 cursor-pointer text-clip overflow-hidden"
          >
            {category?.heading}
          </a>
          <div className="flex mt-2 text-xl text-gray-400 p-2 truncate">
            <p className=" text-black ">{category?.aurther}</p>
            <p className="font-bold ml-4">{category?.date}</p>
          </div>
        </div>

        <p className=" text-xl start-0 text-start text-clip overflow-hidden">
          {wordLength(category?.detail.description)}.. .
        </p>
      </div>
      <hr className="m-[4%]" />
    </div>
  );
};

export default Category_Post;
