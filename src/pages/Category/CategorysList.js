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
    <div className="bg-white shadow-lg border-2   mt-4 m-[2%]">
      <h1 className="text-2xl  font-black ml-4 my-4">Category</h1>
      <hr className="mx-8" />
      {Object.entries(categoryCounts).map(([category, count]) => {
        const convertedCategory = category.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={category}>
            <div className="flex justify-between mx-8 p-3 hover:text-blue-500">
              <Link
                href={`/category/${convertedCategory}`}
                className="text-2xl courser-pointer "
              >
                {category}
              </Link>
              <p className="border-2 rounded-md px-2 text-center">{count}</p>
            </div>
            <hr className="mx-8" />
          </div>
        );
      })}
    </div>
  );
};

export default CategorysList;
