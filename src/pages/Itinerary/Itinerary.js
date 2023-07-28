"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
import Follow from "@/pages/Category/Follow";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";

export const metadata = {
  title: "Travel Itinerary - Travel Tippler",
  description: "Generated by create next app",
};

const Itinerary = () => {
  const params = useParams();
  const router = useRouter();
  // const paramsList = formatCategory(params.categoryIds);

  const categoryHandler = (category) => {
    router.push(`/category/travel-itinerary/${category.id}`);
  };
  //
  return (
    <div className="flex flex-col justify-between w-[100%] lg:flex-row   ]">
      <div className="mt-6 ">
        <div className="bg-white shadow-lg border-2 w-full lg:w-[90%]  lg:ml-[10%] ">
          <div className="mt-4">
            <h1 className="text-2xl font-bold ml-[2%]">Travel Itinerary</h1>
          </div>
          <hr className="m-6" />
          {CATEGORYs.map((cagte, index) => {
            if (cagte.category === "Travel Itinerary") {
              return (
                <div key={cagte.id} className="flex justify-between   m-4 ">
                  <div className="relative m-3 cursor-pointer">
                    <Image
                      src={cagte.image}
                      className="rounded-md "
                      alt="Travel"
                      width={700}
                      height={700}
                    />
                    <Link
                      href={`/category/travel-itinerary`}
                      className="absolute z-10 text-xl text-bold text-left top-0 bg-neutral-500  hover:bg-blue-500 hover:text-black p-2 text-white rounded-md"
                    >
                      {cagte.category}
                    </Link>
                  </div>
                  <div className="ml-4">
                    <a
                      // href={`/category/${categoryType}/${cagte.id}`}
                      onClick={() => categoryHandler(cagte)}
                      className="text-2xl font-bold  hover:text-blue-600 cursor-pointer"
                    >
                      {cagte.heading}
                    </a>
                    <div className="flex mt-2 text-xl text-gray-400">
                      <p className=" text-black">{cagte.aurther}</p>
                      <p className="font-bold ml-4">{cagte.date}</p>
                    </div>
                    <p className="mt-5 text-xl">
                      {getFirstTwoLines(cagte.detail.description)}...
                    </p>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      <div className="lg:w-[60%] w-full mx-auto lg:mt-3">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Itinerary;
