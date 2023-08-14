"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const CategoryTypes = () => {
  const params = useParams();

  return (
    <div className="bg-white shadow-lg  w-full mt-2  mx-auto lg:w-[80%] ">
      {CATEGORYs.map((category) => {
        if (category.id == params.categoryType) {
          return (
            <div key={category.id} className="p-4">
              <div>
                <Link
                  href={`/category/${params.categoryIds}`}
                  className="bg-blue-400 p-1  text-xl text-white rounded-sm hover:bg-black"
                >
                  {category.category}
                </Link>
              </div>
              <h1 className="mt-4 text-[27px] font-bold">{category.heading}</h1>
              <p className="mt-3 text-xl font-bold">
                {`Posted by ${category.aurther} - ${category.date}`}
              </p>
              <p className="break-words whitespace-pre-wrap font-sans  text-2xl mt-4">
                {category.detail.description}...
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                {category.detail.heading_h}
              </h2>

              <Image
                src={category.detail.img}
                width={700}
                height={700}
                alt="travel"
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CategoryTypes;
