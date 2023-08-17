"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import CATEGORYs from "@/components/helper/CATEGORYs";
import formatCategory from "@/components/hooks/ConvertSmall";
import Follow from "@/pages/Category/Social_Links";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";
import Category_Post from "@/pages/Category/Category_Post";

const CategoryIds = () => {
  const params = useParams();
  const path= usePathname()
  const paramsList = formatCategory(params.categoryIds);
console.log(path)
  return (
    <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
      <div className=" sm:w-max-[1160px] bg-white h-auto">
        <div className="mt-4">
          <h1 className="text-2xl font-bold ml-[2%]">{paramsList}</h1>
        </div>
        <hr className="m-6" />
        {CATEGORYs.map((category, index) => {
          if (category.category === paramsList) {
            return (
              <Category_Post  id={category.id} key={category.id} description={category.detail.description} date={category.date} image={category.image} category={category.category} aurther={category.aurther} heading={category.heading}/>
            );
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

export default CategoryIds;
