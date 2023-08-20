"use client";
import React from 'react'
import Follow from "@/pages/Category/Social_Links";
import RecentPost from "@/pages/Category/RecentPost";
import CategorysList from "@/pages/Category/CategorysList";
import { useParams } from 'next/navigation';
import CATEGORYs from '@/components/helper/CATEGORYs';
import Category_Post from '@/pages/Category/Category_Post';
import useCategoryName from '@/components/hooks/ConvertCaps';
import formatCategory from '@/components/hooks/ConvertSmall';


const CategoryDetail = () => {
  const params = useParams();
  const name = formatCategory(params.categoryIds);

  return (
    <div className="md:flex md:justify-between mx-[5%] md:mt-2 ">
      <div className=" sm:w-max-[1160px] bg-white h-auto">
        <div className="mt-4">
          <h1 className="text-2xl font-bold ml-[2%]">{name}</h1>
        </div>
        <hr className="m-6" />
        {CATEGORYs.map((category, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const capsFormat = useCategoryName(category.category)
          if (capsFormat === params.categoryIds) {
            return (
              <Category_Post
                key={category.id}
                description={category.detail.description}
                date={category.date}
                image={category.image}
                category={category.category}
                aurther={category.aurther}
                heading={category.heading} />
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
  )
}

export default CategoryDetail
// export const fetchPostLists = async () => {
//   const data = await fetch("https://www.traveltippler.com/wp-json/wp/v2/posts");
//   const responseData = await data.json();
//   return responseData
// }