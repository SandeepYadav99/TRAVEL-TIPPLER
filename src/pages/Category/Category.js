"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";

import React from "react";

import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";

const Category = () => {
  return (
    <div className="mx-[4%] sm:flex shadow-md">
      <div className="shadow-md sm:w-max-[1160px] bg-white">
        {CATEGORYs.map((category, index) => {
          return <Category_Post category={category} key={index} />;
        })}
      </div>
      <div className="sm:w-[35rem]">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
