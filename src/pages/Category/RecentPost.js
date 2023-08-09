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
    <div className="bg-white shadow-sm   mt-4 mx-[2%] ">
      <h1 className="text-2xl font-bold mt-2 ml-2">Recent Posts</h1>
      <hr className="m-[4%]" />
      {CATEGORYs.map((category, index) => {
        return (
          <div key={category.id} className="md:w-[30vw]">
            <div className="p-4 ">
              <Image
                src={category.image}
                height={150}
                width={150}
                alt=""
                className="mr-4 rounded-md float-left cursor-pointer"
              />
           
                <a
                  onClick={() => categoryHandler(category)}
                  className="text-lg  text-justify cursor-pointer text-ellipsis truncate  line-clamp-3 whitespace-normal  hover:text-blue-400"
                >
                  {category.heading}
                </a>

                <p className="text-sm font-light text-gray-600  ">{category.date}</p>
           
            </div>
            <hr className="m-[3%] " />
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
