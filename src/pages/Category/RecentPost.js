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
    <div className="bg-white shadow-sm   mt-4 mx-[2%] p-[20px]">
      <h1 className="text-[17px] font-bold mt-4 pb-[10px]">Recent Posts</h1>
      <hr className="m-[4%]" />
      {CATEGORYs.map((category, index) => {
        return (
          <div key={category.id} className="">
            <div className="">
              <Image
                src={category.image}
                height={80}
                width={80}
                alt=""
                className=" rounded-md float-left cursor-pointer mr-5"
              />
                <a
                  onClick={() => categoryHandler(category)}
                  className="text-[14px]   cursor-pointer text-ellipsis truncate font-[#000000] whitespace-normal hover:text-blue-400"
                >
                  {category.heading}
                </a>
                <p className="text-sm font-light text-gray-600 sm:text-center ">{category.date}</p>
           
            </div>
            <hr className="m-[3%] " />
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
