/* eslint-disable react/jsx-key */
"use client";

import React from "react";
import CATEGORYs from "@/components/helper/CATEGORYs";
import Follow from "@/pages/Category/Social_Links";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";

import Category_Post from "../Category/Category_Post";


const Itinerary = () => {
  return (
    <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
      <div className="bg-white ">
        <div className="mt-4 ">
          <h1 className="text-[19px]  font-semibold ml-[2%]">Travel Itinerary</h1>
          <hr className="mx-[4px] " />
        </div>
        {CATEGORYs.map((category, index) => {
          if (category.category === "Travel Itinerary") {
            return <Category_Post fetch_PostLists={category} key={category.id}/>;
          }
          return null;
        })}
      </div>
      <div className="sm:w-[35rem] mt-2">
        <Follow />
        <RecentPost />
        <CategorysList />
      </div>
    </div>
  );
};

export default Itinerary;
