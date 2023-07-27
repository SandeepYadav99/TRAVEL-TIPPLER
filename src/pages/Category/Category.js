"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import Follow from "./Follow";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import useCategoryName from "@/components/hooks/ConvertCaps";

const Category = () => {
  const router = useRouter();

  const categoryHandler = (category) => {
    const converted = category.category.toLowerCase().replace(/ /g, "-");
    router.push(`categoryType/${category.id}`);
  };

  const wordLength = (detail) => {
    if (detail) {
      const word = getFirstTwoLines(detail);
      return word;
    }
  };
  return (
    <div className="p-4 flex flex-col justify-between w-[100%] lg:flex-row  mx-auto lg:-mt-12 ">
      <div className="bg-white shadow-lg border-2 w-[100%] lg:w-[80%]   lg:ml-[6%]  ">
        {CATEGORYs.map((category, index) => {
          const categoryType = useCategoryName(category.category);
          return (
            <>
              <div key={category.id} className="flex justify-between   m-4 ">
                <div className="relative m-3 cursor-pointer ">
                  <Image
                    src={category.image}
                    className="rounded-md "
                    alt="Travel"
                    width={600}
                    height={600}
                  />
                  <Link
                    href={`category/${categoryType}`}
                    className="lg:block hidden absolute z-10 text-xl text-bold text-left top-0 bg-neutral-500  hover:bg-blue-500 hover:text-black p-2 text-white rounded-md"
                  >
                    {category.category}
                  </Link>
                </div>
                <div className="ml-2 mt-2">
                  <Link
                    href={`/category/${categoryType}/${category.id}`}
                    // onClick={() => categoryHandler(category)}
                    className="text-2xl font-bold mt-4 hover:text-blue-600 cursor-pointer"
                  >
                    {category.heading}
                  </Link>
                  <div className="flex mt-2 text-xl text-gray-400">
                    <p className=" text-black">{category.aurther}</p>
                    <p className="font-bold ml-4">{category.date}</p>
                  </div>
                  <p className="mt-[8%] text-xl ">
                    {wordLength(category.detail.description)}.. .
                  </p>
                </div>
              </div>
              <hr className="m-[4%]" />
            </>
          );
        })}
      </div>
      {/* Follwo upd is Hear  */}
      <div className="lg:w-[60%] w-full mx-auto lg:-mt-4">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
