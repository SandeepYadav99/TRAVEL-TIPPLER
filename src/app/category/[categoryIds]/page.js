"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import formatCategoryName from "@/components/hooks/ConvertSmall";
import CATEGORYs from "@/components/helper/CATEGORYs";
import ConvertCaps from "@/components/hooks/ConvertCaps";
import Image from "next/image";
import Link from "next/link";
import getFirstTwoLines from "@/components/hooks/ConvertWordLength";
const CategoryIds = () => {
  const params = useParams();
  const router = useRouter();
  const paramsList = formatCategoryName(params?.categoryIds);

  const categoryHandler = (id) => {
    // router.push(`/${id}`);
  };

  return (
    <div className="mt-6">
      <div className="bg-white shadow-lg border-2 w-full lg:w-[60%]  ml-[10%] ">
        <div className="mt-2">
          <h1 className="text-2xl font-bold ml-[2%]">{paramsList}</h1>
        </div>
        <hr className="m-6" />
        {CATEGORYs.map((cagte, index) => {
        
          if (cagte.category === paramsList) {
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
                    href={``}
                    className="absolute z-10 text-xl text-bold text-left top-0 bg-neutral-500  hover:bg-blue-500 hover:text-black p-2 text-white rounded-md"
                  >
                    {cagte.category}
                  </Link>
                </div>
                <div className="ml-4">
                  <a
                    onClick={() => categoryHandler(cagte.id)}
                    className="text-2xl font-bold mt-2 hover:text-blue-600 cursor-pointer"
                  >
                    {cagte.heading}
                  </a>
                  <div className="flex mt-2 text-xl text-gray-400">
                    <p className=" text-black">{cagte.aurther}</p>
                    <p className="font-bold ml-4">{cagte.date}</p>
                  </div>
                  <p className="mt-5 text-xl">{getFirstTwoLines(cagte.detail.description)}...</p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default CategoryIds;
