"use client";
import Link from "next/link";
import React from "react";

const CategorysList = ({ fetch_categories }) => {
 
  return (
    <div className="bg-white shadow-sm  mt-4 m-[2%] p-1">
      <h1 className="text-[17px]  font-black mt-4 pb-[10px]">Category</h1>
      <hr className="mx-2" />
    
      {fetch_categories?.map((category) => {
        const { id, slug, name, count } = category;
        if(count === 0) return;
        return (
          <div key={id}>
            <div className="flex justify-between mx-8 p-3  hover:text-blue-500">
              <Link
                href={`/category/${slug}`}
                className="text-[16px] courser-pointer "
                dangerouslySetInnerHTML={{__html:  name}}
              >
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
