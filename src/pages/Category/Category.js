"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";

import React from "react";

import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";

const Category = () => {
 
 
  return (
    <div className="md:flex md:justify-between  md:mt-2  mx-[5%]">
      <div className="shadow-lg w-min-[960px] w-max-[1179px]">
        {CATEGORYs.map((category, index) => {
          return <Category_Post category={category} key={index} />;
        })}
      </div>
      <div className="md:w-max-[30vw] md:w-[40vw]">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
