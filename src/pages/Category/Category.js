"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";

import React from "react";

import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";

const Category = () => {
  return (
    // md:flex md:justify-between  md:mt-2  mx-[5%]
    <div className="mx-[2%] sm:flex">
      {/* w-min-[960px] w-max-[1179px] */}
      <div className="shadow-lg sm:w-max-[1160px] ">
        {CATEGORYs.map((category, index) => {
          return <Category_Post category={category} key={index} />;
        })}
      </div>
      {/* md:w-max-[30vw] md:w-[40vw] */}
      <div className="sm:w-[35rem]">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
