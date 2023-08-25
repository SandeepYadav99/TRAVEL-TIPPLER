"use client";
import CATEGORYs from "@/components/helper/CATEGORYs";
import React from "react";
import Follow from "./Social_Links";
import RecentPost from "./RecentPost";
import CategorysList from "./CategorysList";
import Category_Post from "./Category_Post";

const Category = ({fetch_categories, fetch_PostLists}) => {
console.log(fetch_categories,  "Category");
console.log(fetch_PostLists, "Post lists ")
  return (
    <div className="mx-[4%] sm:flex shadow-md ">
      <div className="">
        <div className="shadow-md sm:w-max-[1160px] bg-white pb-[20px]">
          {fetch_PostLists.map((category, index) => {
            return <Category_Post
              id={category.id}
              key={category.id}
              image={category.content.rendered}
              category={category.category}
              author={category.author}
              title={category.title.rendered
              }
              date={category.date}
              excerpt={category.excerpt}
              slug={category.slug
              }
            />;
          })}
        </div>
      </div>
      <div className="sm:w-[35rem] mt-2">
        <Follow />
        <RecentPost />
        <CategorysList fetch_categories={fetch_categories}/>
      </div>
    </div>
  );
};

export default Category;
