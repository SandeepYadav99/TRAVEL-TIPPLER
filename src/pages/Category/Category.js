"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";

import React from "react";

import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";

const Category = ({ categoryData }) => {
  console.log(categoryData)
  return (
    <div className="lg:flex lg:justify-between mx-[5%] md:mt-2  ">
      <div className="shadow-lg">
        {CATEGORYs.map((category, index) => {
          return <Category_Post category={category} key={index} />;
        })}
      </div>
      <div className="">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
