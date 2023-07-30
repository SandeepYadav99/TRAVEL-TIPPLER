"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import useCategoryName from "@/components/hooks/ConvertCaps";
import { useRouter } from "next/navigation";

const Category_Post = ({ category , catageryId}) => {
  const router = useRouter();

  const categoryType = useCategoryName(category?.category);
  const wordLength = (detail) => {
    if (detail) {
      const word = getFirstTwoLines(detail);
      return word;
    }
  };

  const headingHandler = (id) => {
    router.push(`/category/${categoryType}/${id}`)
  }
  return (
    <div key={catageryId}>
      <div className="flex justify-between   m-4 ">
        <div className="relative m-3 cursor-pointer ">
          <Image
            src={category?.image}
            className="rounded-md "
            alt="Travel"
            width={600}
            height={600}
          />
          <Link
            href={`/category/${categoryType}`}
            className="th:block hidden  absolute z-10 text-xl text-bold text-left top-0 bg-neutral-500  hover:bg-blue-500 hover:text-black p-2 text-white rounded-md"
          >
            {category?.category}
          </Link>
        </div>
        <div className="ml-2 mt-2 ">
          <a
           onClick={()=>headingHandler(category.id)}
            className="text-2xl font-bold mt-4 hover:text-blue-600 cursor-pointer"
          >
            {category?.heading}
          </a>
          <div className="flex mt-2 text-xl text-gray-400 ">
            <p className=" text-black">{category?.aurther}</p>
            <p className="font-bold ml-4">{category?.date}</p>
          </div>
          <p className="mt-[8%] text-xl ">
            {wordLength(category?.detail.description)}.. .
          </p>
        </div>
      </div>
      <hr className="m-[4%]" />
    </div>
  );
};

export default Category_Post;
