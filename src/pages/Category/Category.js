/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";
import CATEGORYs from "@/components/helper/CATEGORYs";

const Category = () => {

  return (
    <div className="mx-[4%] sm:flex shadow-md ">
      <div className="">
        {CATEGORYs.map((category) => <Category_Post fetch_PostLists={category} key={category.id} />)}
      </div>
      <div className="sm:w-[35rem] mt-2">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Category;
