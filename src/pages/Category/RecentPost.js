"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const RecentPost = () => {
  const router = useRouter();

  const categoryHandler = (category) => {
    const converted = category.category.toLowerCase().replace(/ /g, "-");

    router.push(`/category/${converted}/${category.id}`);
  };

  return (
    <div>
      <div className="bg-white shadow-lg border-2  mt-4 m-[2%]">
        <h1 className="text-2xl font-bold mt-2 ml-2">Recent Posts</h1>
        <hr className="m-[4%]" />
        {CATEGORYs.map((category, index) => {
          return (
            <div key={category.id}>
              <div className="flex justify-around  m-4 ">
                <div className=" m-3 cursor-pointer">
                  <Image
                    src={category.image}
                    className="rounded-md "
                    alt="Travel"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="ml-4">
                  <a
                    onClick={() => categoryHandler(category)}
                    className="text-md font-bold  hover:text-blue-600 cursor-pointer"
                  >
                    {category.heading}
                  </a>
                  <div className=" mt-2  text-gray-400">
                    <p className="font-bold ml-4 ">{category.date}</p>
                  </div>
                </div>
              </div>
              <hr className="m-[4%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPost;
