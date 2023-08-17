"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Link from "next/link";
import React from "react";

const CategorysList = () => {
  const categoryCounts = CATEGORYs.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category]++;
    return acc;
  }, {});

  return (
    <div className="bg-white shadow-sm  mt-4 m-[2%] p-1">
      <h1 className="text-[17px]  font-black mt-4 pb-[10px]">Category</h1>
      <hr className="mx-2" />
      {Object.entries(categoryCounts).map(([category, count]) => {
        const convertedCategory = category.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={category}>
            <div className="flex justify-between mx-8 p-3  hover:text-blue-500">
              <Link
                href={`/category/${convertedCategory}`}
                className="text-[16px] courser-pointer "
              > 
                {category}
              </Link>
              <p className="border-2 rounded-md h-6 w-6 flex justify-center text-[11px] bg-gray-100 ">{count}</p>
            </div>
            <hr className="mx-2" />
          </div>
        );
      })}
    </div>
  );
};

export default CategorysList;
