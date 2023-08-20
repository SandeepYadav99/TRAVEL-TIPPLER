/* eslint-disable @next/next/no-async-client-component */
"use client";
import React from 'react'

import useCategoryName from '@/components/hooks/ConvertCaps';
import formatCategory from '@/components/hooks/ConvertSmall';
import { useParams } from 'next/navigation';
import CATEGORYs from '@/components/helper/CATEGORYs';
import Category_Post from '@/pages/Category/Category_Post';
import RecentPost from '@/pages/Category/RecentPost';
import CategorysList from '@/pages/Category/CategorysList';
import Social_Links from '@/pages/Category/Social_Links';


const CategoryTypeLists = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();
    // const fetch_categories = await fetchCategory()
    const categoryType = params?.categoryIds;
    const name = formatCategory(params?.categoryIds);

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
                    if (capsFormat === categoryType) {
                        return <Category_Post
                                id={category.id}
                                key={category.id}
                                description={category.detail.description}
                                date={category.date}
                                image={category.image}
                                category={category.category}
                                aurther={category.aurther}
                                heading={category.heading} /> 
                    }
                
                })}
            </div>
            <div className="sm:w-[35rem] mt-2">
                <Social_Links />
                <RecentPost />
                <CategorysList  />
            </div>
        </div>
    )
}

export default CategoryTypeLists;



// export const fetchPostLists = async () => {
//   const data = await fetch("https://www.traveltippler.com/wp-json/wp/v2/posts");
//   const responseData = await data.json();
//   return responseData
// }
export const fetchCategory =async () => {
  const data = await fetch("https://www.traveltippler.com/wp-json/wp/v2/categories");
  const responseData = await data.json();
  return responseData
}